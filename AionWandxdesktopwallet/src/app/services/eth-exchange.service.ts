import { Injectable, NgZone } from '@angular/core';
import {NotificationManagerService} from './notification-manager.service';
import {MessageModel, MessageType, MessageContentType} from '../models/message.model';
import {Web3Service} from './web3.service';
import {UserService} from './user.service';
import {Constants} from '../models/constants';
import {SavedWalletsService} from './saved-wallets.service'
import {PlatformToken} from '../models/platform-tokens';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {PlatformTokenService} from './platform-token.service'
import {MarketBroadcastService} from './market-broadcast.service'
import * as abi from 'human-standard-token-abi';
var Web3 = require('aion-web3')
declare namespace web3Functions {

  export function toBaseUnitAmount(amount: any, decimals: any);

  export function extractECSignature(sign: any, orderHash: any, signer: any);

  export function clientVerifySign(ecSignature: any, orderHash: any, signer: any);
}


@Injectable()
export class EthExchangeService {

	// this will all the common functions use by exchange
	private _selectedPlatformToken :  PlatformToken;
	private _escrowEtherValue : BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private _selectedTokenEscrowValue :  BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private _wandEscrowValue :  BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private _authorizedAmount : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _authorizedWandAmount : BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private _authorize : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	private _authorizeWand :  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _ethWalletBalance : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _platformTokenWalletBalance : BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private refreshTimer : any
  private _forceRefresh : Subject<boolean> = new Subject<boolean>();

	public escrowEtherValue$  = this._escrowEtherValue.asObservable()
	public selectedTokenEscrowValue$ = this._selectedTokenEscrowValue.asObservable()
	public wandEscrowValue$ = this._wandEscrowValue.asObservable()
	public authorizedAmount$  = this._authorizedAmount.asObservable()
  public authorizedWandAmount$  = this._authorizedWandAmount.asObservable()
	public authorize$  = this._authorize.asObservable()
	public authorizeWand$  = this._authorizeWand.asObservable()
  public ethWalletBalance$ = this._ethWalletBalance.asObservable()
  public platformTokenWalletBalance$ = this._platformTokenWalletBalance.asObservable()
  public forceRefresh$ = this._forceRefresh.asObservable()
	private i = 0
  _web3:any;
  constructor(
  	private web3Service : Web3Service,
  	private userService : UserService,
  	private notificationService : NotificationManagerService,
  	private savedWalletsService : SavedWalletsService,
  	private platformTokenService : PlatformTokenService,
    private marketBroadcastService : MarketBroadcastService,
  	private zone : NgZone

  ) {
    this._web3 = new Web3(new Web3.providers.HttpProvider("http://52.15.173.92:8545"));
  	this.getEtherEscrowValue = this.getEtherEscrowValue.bind(this)
		this.getSelectedTokenEscrowValue = this.getSelectedTokenEscrowValue.bind(this)
		this.checkAllowance = this.checkAllowance.bind(this)
		this.checkWandAllowance = this.checkWandAllowance.bind(this)
		this.onAuthorizeChange = this.onAuthorizeChange.bind(this)
		this.onAuthorizeWandChange = this.onAuthorizeWandChange.bind(this)
		this.completeRefresh = this.completeRefresh.bind(this)

  	this.platformTokenService.selectedPlatformToken$.subscribe((value) => {
  		if (value) {
  			this._selectedPlatformToken = value
        this.completeRefresh()
  		}
  	})
    this.marketBroadcastService.marketStatus$.subscribe(status => {
      if (status == 'changed') {
        this._selectedPlatformToken = this.marketBroadcastService.getSelectedPlatformToken()
        var selectedExchange = this.marketBroadcastService.getSelectedExchange()
        if (this._selectedPlatformToken && selectedExchange == 'eth') {
          this.completeRefresh()
        } else {
          clearTimeout(this.refreshTimer);
        }

        if (this._selectedPlatformToken && selectedExchange == 'aion') {
          this.completeRefresh()
        } else {
          clearTimeout(this.refreshTimer);
        }
        // this.refresh()
        // this.initiateAutoRefresh()
      }
    })
  }
  private initiateAutoRefresh() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    this.refreshTimer = setTimeout(() => {
      this.completeRefresh()
    }, 30000);
  }
  completeRefresh() {
  	if (!this._selectedPlatformToken)
  		return;
  	this.refresh();
    this.initiateAutoRefresh();
  }
  setForceRefresh(forceRefresh) {
    this._forceRefresh.next(forceRefresh)
  }
  refresh() {
  	this.getEtherEscrowValue()
		this.getSelectedTokenEscrowValue()
		this.checkWandAllowance()
		this.checkAllowance()
    this.getEthBalanceForUser()
    this.getPlatformTokenBalanceForUser()
  }
  getEtherEscrowValue() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.OrderbookContractAbi);
    var instanceOrderTraderContract = orderTraderContract.at(Constants.OrderBookContractAddress);
    instanceOrderTraderContract.balanceOf(userAccount, (err, data) => {
     
      if (data)
        this._escrowEtherValue.next(+web3.fromWei(data));
      else
        this._escrowEtherValue.next(0.0);
    });
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    var self=this;
    let userAccount = sessionStorage.getItem("walletAddress");
   
    let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.OrderbookContractAbiWAN,Constants.OrderBookContractAddressWAN, {
      gasLimit: 3000000,
    })
      instanceOrderTraderContract.methods.balanceOf(userAccount).call().then(function (data) {
    
      if (data)
        self._escrowEtherValue.next(+self._web3.utils.fromNAmp(data));
      else
        self._escrowEtherValue.next(0.0);
    });
  }
  }
  getWandEscrowValue() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.TokenAbi);
    var instanceOrderTraderContract = orderTraderContract.at(Constants.WandxTokenAddress);
    instanceOrderTraderContract.allowance(userAccount, Constants.OrderBookContractAddress, (err, data) => {
      if (data){
        let conversion = +web3.fromWei(data.toString());
        conversion = conversion * (10 ** (18 - Constants.WandxTokenDecimals));
        this._wandEscrowValue.next(conversion);
      }
      else
        this._wandEscrowValue.next(0.0);
    });
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    var self=this;
    let userAccount = sessionStorage.getItem("walletAddress");
   
    let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.TokenAbiWAN,Constants.WandxTokenAddressWAN, {
      gasLimit: 3000000,
    })
      instanceOrderTraderContract.methods.allowance(userAccount, Constants.OrderBookContractAddressWAN).call().then(function (data) {
      if (data){
        let conversion = +this._web3.fromNAmp(data.toString());
        conversion = conversion * (10 ** (18 - Constants.WandxTokenDecimals));
        self._wandEscrowValue.next(conversion);
      }
      else
        self._wandEscrowValue.next(0.0);
    });
  }
  }
  getSelectedTokenEscrowValue() {
    if (
      !this._selectedPlatformToken || !this._selectedPlatformToken.address) {
      return this._selectedTokenEscrowValue.next(0);
    }
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.OrderbookContractAbi);
    var instanceOrderTraderContract = orderTraderContract.at(Constants.OrderBookContractAddress);
  
    instanceOrderTraderContract.balanceOfToken(userAccount, this._selectedPlatformToken.address, (err, data) => {
      if (data) {
      
        let conversion = +web3.fromWei(data.toString());
        conversion = conversion * (10 ** (18 - this._selectedPlatformToken.decimals));
        this._selectedTokenEscrowValue.next(conversion);
        this.checkAllowance();
      }
    });
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    // let address =['0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x9181bf7531faf4f4b488621f1e63dee09e268fe2','0x7e3fde3c98da5ba63399b098e0ad6ca2429c6656','0xdec1259156221f5a35a2bc2ae77ad584e45eb4ac','0x88f376e8b8e525f15ce7d1b5c5e49bb41a5dc19b','0x2f37ec384180a6475df3de2e4bab6ae10caa937b','0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x5b0ecff8c72fca56e634f80d63b13d13f6abc1a5'];
    //   let symbol =['WXETH','WXETH','WAND','QTUM','GNT','ZRX','SAND','WXETH','POWR'];
    var self=this;
      let userAccount = sessionStorage.getItem("walletAddress");
    
      let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.OrderbookContractAbiWAN,Constants.OrderBookContractAddressWAN, {
        gasLimit: 3000000,
      })
        instanceOrderTraderContract.methods.balanceOfToken(userAccount,this._selectedPlatformToken.address).call().then(function (data) {
      if (data) {
       
        let conversion = +self._web3.utils.fromNAmp(data.toString());
        console.log("conversion1",conversion);
        conversion = conversion * (10 ** (18 - self._selectedPlatformToken.decimals));
        console.log("conversion",conversion);
        self._selectedTokenEscrowValue.next(conversion);
        self.checkAllowance();
      }
    });
  }
  }
  getEthBalanceForUser() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    if ( !userAccount || !userAccount.length)
      return
    let web3 = this.web3Service.getWeb3();
    let userAddress = web3.eth.coinbase
    web3.eth.getBalance(userAddress, (err, balance) => {
      let conversion = +web3.fromWei(balance.toString());
      this._ethWalletBalance.next(conversion);
    })
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    // let userAccount = this.userService.getCurrentUser().UserAccount;
    // if ( !userAccount || !userAccount.length)
    //   return
    //let web3 = this.web3Service.getWeb3();
    let userAddress =sessionStorage.getItem('walletAddress')
    this._web3.eth.getBalance(userAddress, (err, balance) => {
      let conversion = this._web3.utils.fromNAmp(balance.toString());
      this._ethWalletBalance.next(conversion);
    }) 
  }
  }
  getPlatformTokenBalanceForUser() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    if ( !userAccount || !this._selectedPlatformToken)
      return
    let web3 = this.web3Service.getWeb3();
    let userAddress = web3.eth.coinbase
    var selectedTokenContract = web3.eth.contract(abi).at(this._selectedPlatformToken.address)
    selectedTokenContract.balanceOf(userAddress, (err, balance) => {
      let conversion = +web3.fromWei(balance.toString());
      conversion = conversion * (10 ** (18 - this._selectedPlatformToken.decimals));
      this._platformTokenWalletBalance.next(conversion);
    })
  }
  if(sessionStorage.getItem('exchange')=='aion')
    {
      var self=this;
    
      let userAccount = sessionStorage.getItem("walletAddress");
    if ( !userAccount || !this._selectedPlatformToken)
      return
    let web3 = this.web3Service.getWeb3();
    let userAddress = userAccount;
   
    let selectedTokenContract = new this._web3.eth.Contract(Constants.EtherTokenAbi,this._selectedPlatformToken.address, {
      // from: this.account,
      gasLimit: 3000000,
    })
      selectedTokenContract.methods.balanceOf(userAddress).call().then(function (err) {   
      let conversion = +self._web3.utils.fromNAmp(err.toString());
      conversion = conversion * (10 ** (18 - self._selectedPlatformToken.decimals));
      self._platformTokenWalletBalance.next(conversion);
    })
    }
  }
  checkAllowance() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    if ( !userAccount || !userAccount.length)
      return
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.TokenAbi);
    var instanceOrderTraderContract = orderTraderContract.at(this._selectedPlatformToken.address);
    instanceOrderTraderContract.allowance(userAccount, Constants.OrderBookContractAddress, (err, data) => {
      this._authorizedAmount.next(data);
      if (data >= 25000000) {
       
        this._authorize.next(true);
      }
      else {
       
        this._authorize.next(false);
      }
    });
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    var self=this;
    let userAccount = sessionStorage.getItem("walletAddress");
    if ( !userAccount || !userAccount.length)
      return
    let web3 = this.web3Service.getWeb3();
    let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.EtherTokenAbi,this._selectedPlatformToken.address, {
      // from: this.account,
      gasLimit: 3000000,
    })
   
      instanceOrderTraderContract.methods.allowance(userAccount, Constants.OrderBookContractAddressWAN).call().then(function (data) {
  
      self._authorizedAmount.next(data.toString());
      if (data >= 25000000) {
        console.log('check');
        self._authorize.next(true);
      }
      else {
        console.log('check');
        self._authorize.next(false);
      }
    });
  }
  }
  checkWandAllowance() {
    if(sessionStorage.getItem('exchange')=='eth')
    {
      let userAccount = this.userService.getCurrentUser().UserAccount;
      if ( !userAccount || !userAccount.length)
        return
      let web3 = this.web3Service.getWeb3();
      var orderTraderContract = web3.eth.contract(Constants.TokenAbi);
      var instanceOrderTraderContract = orderTraderContract.at(Constants.WandxTokenAddress);
      instanceOrderTraderContract.allowance(userAccount, Constants.OrderBookContractAddress, (err, data) => {
        this._authorizedWandAmount.next(data);
        if (data >= 25000000) {
          this._authorizeWand.next(true);
        }
        else {
          this._authorizeWand.next(false);
        }
      });
    }
    if(sessionStorage.getItem('exchange')=='aion')
    {
      var self=this;
    let userAccount = sessionStorage.getItem("walletAddress");
    if ( !userAccount || !userAccount.length)
      return
    let web3 = this.web3Service.getWeb3();
    
    let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.EtherTokenAbi,Constants.WandxTokenAddressWAN, {
      // from: this.account,
      gasLimit: 3000000,
    })
    instanceOrderTraderContract.methods.allowance(userAccount, Constants.OrderBookContractAddressWAN).call().then(function (data) {
      self._authorizedWandAmount.next(data.toString());
      if (data >= 25000000) {
        
        self._authorizeWand.next(true);
      }
      else {
      
        self._authorizeWand.next(false);
      }
    });
  }
  }
  onAuthorizeChange(data) {
    if(sessionStorage.getItem('exchange')=='eth')
    {
    if (this._selectedPlatformToken.address === '') {
      return;
    }
    let userAccount = this.userService.getCurrentUser().UserAccount;
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.TokenAbi);
    var instanceOrderTraderContract = orderTraderContract.at(this._selectedPlatformToken.address);

    if (data) {
      instanceOrderTraderContract.approve(Constants.OrderBookContractAddress, web3Functions.toBaseUnitAmount(100000000, this._selectedPlatformToken.decimals), {'from': userAccount}, (err, data) => {
        if (data) {
          this.zone.run(() => {
            this._authorize.next(true);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
        }
        else {
          this.zone.run(() => {
            this._authorize.next(false);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not enabled'), MessageContentType.Text);
        }
      });
    }
    else {
      instanceOrderTraderContract.approve(Constants.OrderBookContractAddress, 0, {'from': userAccount}, (err, data) => {
        if (data) {
          this.zone.run(() => {
            this._authorize.next(false);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
        }
        else {
          this.zone.run(() => {
            this._authorize.next(true);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not disabled'), MessageContentType.Text);
        }
      });
    }
  }
    if(sessionStorage.getItem('exchange')=='aion')
    {
      var self=this;
      // let address =['0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x9181bf7531faf4f4b488621f1e63dee09e268fe2','0x7e3fde3c98da5ba63399b098e0ad6ca2429c6656','0xdec1259156221f5a35a2bc2ae77ad584e45eb4ac','0x88f376e8b8e525f15ce7d1b5c5e49bb41a5dc19b','0x2f37ec384180a6475df3de2e4bab6ae10caa937b','0x9e8f2cae092ef2e991cf101329cba5148a81dce9','0x5b0ecff8c72fca56e634f80d63b13d13f6abc1a5'];
      // let symbol =['WXETH','WXETH','WAND','QTUM','GNT','ZRX','SAND','WXETH','POWR'];
      let userAccount = sessionStorage.getItem("walletAddress");
     
      let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.TokenAbiWAN,this._selectedPlatformToken.address, {
        gasLimit: 3000000,
      })
var tokenaddress=this._selectedPlatformToken.address;

    if (data) {
      this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait..'), MessageContentType.Text);
    const privateKey = this.web3Service.priv;
    console.log(privateKey)
    const contractFunction = instanceOrderTraderContract.methods.approve(Constants.OrderBookContractAddressWAN,this._web3.utils.toNAmp('1'))
    const functionAbi = contractFunction.encodeABI();
    const txParams = {
      gas:999999,
      to:tokenaddress,
      data: functionAbi
    }; 
      self._web3.eth.accounts.signTransaction(txParams,privateKey,function(err,res){
   console.log(res)
   self._web3.eth.sendSignedTransaction(res.rawTransaction).on('transactionHash',hash => {
		if(!hash) {
      self.notificationService.showNotification(new MessageModel(MessageType.Error, 'error'), MessageContentType.Text);
		
		} else {
      console.log(hash)
      self.authorize(hash,tokenaddress);
		}
	
});
      });

    }

    else
    {
      this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
      const privateKey = this.web3Service.priv;
    const contractFunction = instanceOrderTraderContract.methods.approve(Constants.OrderBookContractAddressWAN, 0)
    const functionAbi = contractFunction.encodeABI();
    const txParams = {
      gas:999999,
      to:this._selectedPlatformToken.address,
      data: functionAbi
    }; 
      self._web3.eth.accounts.signTransaction(txParams,privateKey,function(err,res){
            
   console.log(res)
   console.log("rawTransaction "+res.rawTransaction);
   var tx_hash;
   self._web3.eth.sendSignedTransaction(res.rawTransaction).on('transactionHash',hash => {
      if(!hash) {
        self.notificationService.showNotification(new MessageModel(MessageType.Error, 'Not enabled'), MessageContentType.Text);
       
      } else {
        console.log(hash)
        self.authorize1(hash,tokenaddress);
      }
    
  });
});
    }
    }
  }

  authorize(hash,tokenaddress)
  {
   
    this._web3.eth.getTransactionReceipt(hash,(err, hash1)=>{
    
  if(hash1 === null)
  {
    this.authorize(hash,tokenaddress);
  }
  else
  {
    if(hash1['status']== 0x0)
    {

  this.zone.run(() => {
   
    this._authorize.next(false);
  });
  this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not enabled'), MessageContentType.Text);

    }
    else
    {
      this.zone.run(() => {
       
                this._authorize.next(true);
              });
              this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction is Completed.'), MessageContentType.Text);
             
            }
  }
    });
  }

  authorize1(hash,tokenaddress)
  {
   
    this._web3.eth.getTransactionReceipt(hash,(err, hash1)=>{
   
  if(hash1 === null)
  {
    this.authorize1(hash,tokenaddress);
  }
  else
  {
    if(hash1['status']== 0x0)
    {
 
  this.zone.run(() => {
    
    this._authorize.next(true);
  });
  this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not disabled'), MessageContentType.Text);

    }
    else
    {
      this.zone.run(() => {
        
                this._authorize.next(false);
              });
              this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction is Completed.'), MessageContentType.Text);
             
            }
  }
    });
  }

 

  onAuthorizeWandChange(data) {

    if(sessionStorage.getItem('exchange')=='eth')
    {
    let userAccount = this.userService.getCurrentUser().UserAccount;
    let web3 = this.web3Service.getWeb3();
    var orderTraderContract = web3.eth.contract(Constants.TokenAbi);
    var instanceOrderTraderContract = orderTraderContract.at(Constants.WandxTokenAddress);

    if (data) {
      instanceOrderTraderContract.approve(Constants.OrderBookContractAddress, web3Functions.toBaseUnitAmount(100000000, 18), {'from': userAccount}, (err, data) => {
        if (data) {
          this.zone.run(() => {
            this._authorizeWand.next(true);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
        }
        else {
          this.zone.run(() => {
            this._authorizeWand.next(false);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not enabled'), MessageContentType.Text);
        }
      });
    }
    else {
      instanceOrderTraderContract.approve(Constants.OrderBookContractAddress, 0, {'from': userAccount}, (err, data) => {
        if (data) {
          this.zone.run(() => {
            this._authorizeWand.next(false);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
        }
        else {
          this.zone.run(() => {
            this._authorizeWand.next(true);
          });
          this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not disabled'), MessageContentType.Text);
        }
      });
    }
  }
  if(sessionStorage.getItem('exchange')=='aion')
  {
    var self=this;
    let userAccount = sessionStorage.getItem("walletAddress");
    let instanceOrderTraderContract = new this._web3.eth.Contract(Constants.TokenAbiWAN,Constants.WandxTokenAddressWAN, {
      gasLimit: 3000000,
    })
    if (data) {
      this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
    const privateKey = this.web3Service.priv;
    const contractFunction = instanceOrderTraderContract.methods.approve(Constants.OrderBookContractAddressWAN,this._web3.utils.toNAmp('1'))
    const functionAbi = contractFunction.encodeABI();
    const txParams = {
      gas:999999,
      to:Constants.WandxTokenAddressWAN,
      data: functionAbi
    }; 
      self._web3.eth.accounts.signTransaction(txParams,privateKey,function(err,res){
           
   console.log(res)
  
   var tx_hash;
   self._web3.eth.sendSignedTransaction(res.rawTransaction).on('transactionHash',hash => {
		if(!hash) {
      self.notificationService.showNotification(new MessageModel(MessageType.Error, 'error'), MessageContentType.Text);
			
		} else {
      console.log(hash);
      
     self.authorizecheck(hash);
		}
	
});
      })

    }

    else
    {
      this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction has been submitted, might take a while, please wait.'), MessageContentType.Text);
      const privateKey = this.web3Service.priv;
      const contractFunction = instanceOrderTraderContract.methods.approve(Constants.OrderBookContractAddressWAN, 0)
      const functionAbi = contractFunction.encodeABI();
      const txParams = {
        gas:999999,
        to:Constants.WandxTokenAddressWAN,
        data: functionAbi
      }; 
        self._web3.eth.accounts.signTransaction(txParams,privateKey,function(err,res){
         console.log(res)
     self._web3.eth.sendSignedTransaction(res.rawTransaction).on('transactionHash',hash=> {
      if(!hash) {
        self.notificationService.showNotification(new MessageModel(MessageType.Error, 'error'), MessageContentType.Text);
        console.log("transfer error: ", err);
      } else {
        console.log(hash);
        self.authorizecheck1(hash);
      }
    
  });
});
    }
  }
}
authorizecheck(hash)
  {
   
    this._web3.eth.getTransactionReceipt(hash,(err, hash1)=>{
   
  if(hash1 === null)
  {
    this.authorizecheck(hash);
  }
  else
  {
    if(hash1['status']== 0x0)
    {

  this.zone.run(() => {
  
    this._authorizeWand.next(false);
  });
  this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not enabled'), MessageContentType.Text);

    }
    else
    {
      this.zone.run(() => {
       
                this._authorizeWand.next(true);
              });
              this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction is completed.'), MessageContentType.Text);
  }
  }
    });
  }

  authorizecheck1(hash)
  {
   
    this._web3.eth.getTransactionReceipt(hash,(err, hash1)=>{
     
  if(hash1 === null)
  {
    this.authorizecheck(hash);
  }
  else
  {
    if(hash1['status']== 0x0)
    {
 
  this.zone.run(() => {
    
    this._authorizeWand.next(true);
  });
  this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Not disabled'), MessageContentType.Text);

    }
    else
    {
      this.zone.run(() => {
      
                this._authorizeWand.next(false);
              });
              this.notificationService.showNotification(new MessageModel(MessageType.Info, 'Transaction is Completed.'), MessageContentType.Text);
  }
  }
    });
  }


}
