import {Injectable, Inject, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {UUID} from 'angular2-uuid';
import {Http, RequestOptions, Headers} from '@angular/http';

import {Constants} from '../models/constants';
import {MessageModel, MessageType, MessageContentType} from '../models/message.model';
import {  AionWeb3Service}  from '../services/aion-web3.service'
import {Web3Service} from '../services/web3.service';
import {NotificationManagerService} from '../services/notification-manager.service';
import {TokenService} from './token.service';
import {JwtToken} from '../models/token.model';
import {AuthService} from './auth.service';

@Injectable()
export class WalletService {
  private availableTokensType: Array<string> = new Array<string>();
  private tokenContracts: any = undefined;
  private userAccountSummary: any = undefined;
  private PortfolioAddress: any;
  private newPortfolioTokenWithValue: any;
  private _userAccountSummaryChange = new BehaviorSubject<any>(undefined);
  private _tokenContractChange = new BehaviorSubject<any>(undefined);
  private _platformTokenChanges = new BehaviorSubject<any>(undefined);
  private tokenChangeSubscription: Subscription;

  public userAccountSummaryChange$ = this._userAccountSummaryChange.asObservable();
  public tokenContractChange$ = this._tokenContractChange.asObservable();
  public platformTokenChanges$ = this._platformTokenChanges.asObservable();

  constructor(private http: Http,
              private web3: Web3Service,
              private aionweb3:AionWeb3Service,
              private notificationService: NotificationManagerService,
              private tokenService: TokenService, private auth: AuthService) {
    console.log('Wallet service initialized');
    this.tokenChangeSubscription = this.tokenService.token$.subscribe(data => {
      this.handleTokenChange(data)
    });
  }

  fetchContracts() {
    if(sessionStorage.getItem("exchange")=='aion'){
      if (!this.auth.isAuthenticated())
      return;
      var self=this;
      //let web3=this.web3.getWeb3()
      let web3Instance=this.aionweb3.getWeb3();
      let itemLists = [];
      // let address = ['0x9181bf7531faf4f4b488621f1e63dee09e268fe2','0x88f376e8b8e525f15ce7d1b5c5e49bb41a5dc19b'];
      // let symbol =['WAND','ZRX'];
      // let address =['0xa091e20594ab76252649e4e5e848cb40a5d0cb21ad05e8945a392e17c3fcd057','0xa0e71480dc375887dc9b7d0f7218dad7d1586552f4e2ff2648182f4573a329cc','0xa0a905ad1dbfcff5cf88fb791e71cc167c3b9b49a748f02874fdb0ec69a38bd0','0xa0d591c3eca48957888bc7711499caa71a7a88d4bff8f489faa2133a08ecc8d2','0xa073512a09cfdcb6f747044e9e17772aa24c9b213dfe8e598582353ded01ece1','0xa0bf82c9042e3d87a089515afadeacf0b3f10c604289d515571ba9eb1a3890dd'];
      // let symbol =['WAND','ZRX','GNT','POWR','SAND','QTUM'];
      let address=[Constants.wandTokenAddress,Constants.ZRXTokenaddress,Constants.GNTTokenaddress,Constants.powrTokenAddress,Constants.sandTokenaddress,Constants.QTUMTokenaddress]

      let symbol =['WAND','ZRX','GNT','POWR','SAND','QTUM'];
      this.availableTokensType = new Array<string>();
      for (var i = 0; i < symbol.length; i++) {
        if (symbol[i] !== 'ETHER') {
          // let toeknContract = new web3.eth.Contract(Constants.EtherTokenAbi,address[i], {
          //   // from: this.account,
          //   gasLimit: 3000000,
          // })
          let toeknContract = new web3Instance.eth.Contract(Constants.EtherTokenAbi,address[i], {
            // from: this.account,
            gasLimit: 3000000,
          })
          let _symbol=symbol[i];
          let _address=address[i];
          toeknContract.methods.balanceOf(sessionStorage.getItem("walletAddress")).call().then(function (err, res) {
            if (err) {
              console.log(err);
      
                itemLists.push({
                  'id': _symbol,
                  'itemName':_symbol ,
                  'address': _address,
                  'contract': Constants.EtherTokenAbi,
                  'balance':err/1000000000000000000
                });
                self.availableTokensType=itemLists;
                console.log("data fetch contracts",itemLists);
            }
          });
        }
      }
      self._tokenContractChange.next(address);
      self.fetchAccountSummary();
    }  
    else{
        if (!this.auth.isAuthenticated())
         return;
    let headers = new Headers({
      'content-type': 'application/json',
      'Ocp-Apim-Subscription-Key': Constants.ApiManagementSubscriptionKey,
      'Token': this.tokenService.getToken().Jwt
    });
    let requestOptions = new RequestOptions({headers: headers});
    this.http.get(Constants.ServiceURL + 'manage/token/get', requestOptions).subscribe(
      data => {
        this.tokenContracts = data.json();
        this.availableTokensType = new Array<string>();
        for (let i = 0; i < this.tokenContracts.length; i++) {
          if (this.tokenContracts[i].isTokenContract) {
            this.availableTokensType.push(this.tokenContracts[i].symbol);
          }
        }
        this._tokenContractChange.next(this.tokenContracts);
        this.fetchAccountSummary();
      },
      err => {
        console.log(err);
        this.notificationService.showNotification(new MessageModel(MessageType.Error, 'Failed to get token contracts'), MessageContentType.Text);
      }
    );    } 
  }

  fetchAccountSummary() {
    if (!this.auth.isAuthenticated())
      return;
    if(!this.tokenService.getToken()){
      return;
    }
    let headers = new Headers({
      'content-type': 'application/json',
      'Ocp-Apim-Subscription-Key': Constants.ApiManagementSubscriptionKey,
      'Token': this.tokenService.getToken().Jwt
    });
    let requestOptions = new RequestOptions({headers: headers});
    var tokensToFetch = this.availableTokensType;
    tokensToFetch.push('ETH');
    this.http.post(Constants.ServiceURL + 'manage/token/summary', this.availableTokensType, requestOptions).subscribe(
      data => {
        this.userAccountSummary = data.json();
        // console.log("wallet", data.json());
        this._userAccountSummaryChange.next(this.userAccountSummary);
      },
      err => {
        console.log(err);
        //this.notificationService.showNotification(new MessageModel(MessageType.Error, 'Failed to get user account details'), MessageContentType.Text);
      }
    );
  }

  getContracts(): any {
    return this.tokenContracts;
  }

  getUserAccountSummary(): any {
    return this.userAccountSummary;
  }

  handleTokenChange(data: JwtToken) {
    if (data === undefined) return;
    this.fetchContracts();
  }

  setPortfolioAddress(address): any {
    console.log("Returned setPortfolio Address.........",address)
    this.PortfolioAddress = address;
  }

  getPortfolioAddress(): any {
  //return '0x702626503312fe38b78c22a4bbc4955d6f38a0d4';
  console.log("Returned getPortfolio Address.........",this.PortfolioAddress)
  return this.PortfolioAddress;
  }

  getNewPortfolioTokenWithValue(): any {
    return this.newPortfolioTokenWithValue;
  }

  setNewPortfolioTokenWithValue(data): any {
    this.newPortfolioTokenWithValue = data;
  }

  getPlatformTokens() {
      let headers = new Headers({
        'content-type': 'application/json',
        'Ocp-Apim-Subscription-Key': Constants.ApiManagementSubscriptionKey,
        'Token': this.tokenService.getToken().Jwt
      });
      let requestOptions = new RequestOptions({headers: headers});
      this.http.get(Constants.ServiceURL + 'PlatformToken', requestOptions).subscribe(
        data => {
         this._platformTokenChanges.next(data.json())
        });
  }
  stopSubscription() {
    this.tokenChangeSubscription.unsubscribe()
  }
}
