import { Component, OnInit, NgZone } from '@angular/core';
import {SavedWalletsService} from '../../services/saved-wallets.service'
import {MarketBroadcastService} from '../../services/market-broadcast.service'
import{JSONAionWallet,AionWalletHelper} from '../wallets/jsonwallet_aion';
import {Web3Service} from '../../services/web3.service';
import{AionWeb3Service} from '../../services/aion-web3.service'

@Component({
  selector: 'exchange-wallet-select-inline',
  templateUrl: './exchange-wallet-select-inline.component.html',
  styleUrls: ['./exchange-wallet-select-inline.component.css']
})
export class ExchangeWalletSelectInlineComponent implements OnInit {

 	public exchanges = [{
    name : 'ETH',
    _name : 'eth',
    isSelected :false
  }, {
    name : 'NEO',
    _name : 'neo',
    isSelected :false
  }, {
    name : 'AION',
    _name : 'aion',
    isSelected :false
  }
];
  public displayPopup = false;
  public displayWrongPassword = 'none';
	private ethWallets : Array<any> = []
	private neoWallets : Array<any> = []
  public wallets : Array<any> = []
	public selectedWallet : any = "";
  public password : any;
  public pSelectedWallet : any = "";
  private previousExchange : any;
  private selectedExchange : any;
  public showFullScreen : boolean = false
  public passwordError : any = {}
  private savedWalletsServiceSub : any;
	private marketBroadcastServiceSub : any;
	public wallet : any;
  public exchange : any;
  public walletaddres : any;
  aionWalletHelper:any
  constructor(
    public aionWeb3Service:AionWeb3Service,
  	private savedWalletsService : SavedWalletsService,
    private marketBroadcastService : MarketBroadcastService,
    private zone : NgZone,
    private web3service: Web3Service
  ) {
  	this.cancelCallback = this.cancelCallback.bind(this)
  	this.handleSuccess = this.handleSuccess.bind(this)
    this.initFromSession = this.initFromSession.bind(this)
    this.aionWalletHelper = new AionWalletHelper(this.web3service);
  }
  handleSuccess() {
  	this.displayPopup = false
  	this.showFullScreen = false;
  	this.pSelectedWallet = this.selectedWallet
  }
	cancelCallback() {
		this.displayPopup = false
		this.selectedWallet = this.pSelectedWallet
	}
	initFromSession() {
    var walletAddress = sessionStorage.getItem('walletAddress')

    if (walletAddress) {
      var selectedWallet = this.wallets.filter(a => {
        return a.address == walletAddress
      })[0]
    }
 

    if (!this.selectedExchange || !selectedWallet) {
    	this.zone.run(() => {
    		this.showFullScreen = true;
    	})

    }
    if (this.selectedExchange._name == 'aion') {
      console.log("Aion",this.selectedWallet.wallet);
      if (selectedWallet) {
        this.wallet = selectedWallet.address
        this.exchange = this.selectedExchange._name
        this.zone.run(() => {
          this.showFullScreen = true;
        })
      }
      console.log(this.showFullScreen)
    }
    else{
      console.log("selectedWallet.isDecrypted",selectedWallet.isDecrypted);
      if (selectedWallet && !selectedWallet.isDecrypted) {
        this.wallet = selectedWallet.address
        this.exchange = this.selectedExchange._name
        this.zone.run(() => {
          this.showFullScreen = true;
        })
      }
      console.log(this.showFullScreen)
    }
    
	}
  ngOnDestroy() {
    this.savedWalletsServiceSub.unsubscribe()
  }
  ngOnInit() {
  	var exchange = sessionStorage.getItem('exchange')

    if (exchange) {
      var selectedExchange = this.exchanges.filter(a => {
        return exchange == a._name
      })[0]
      this.selectedExchange = selectedExchange
      this.selectedExchange.isSelected = true
    }
    if (!this.selectedExchange) {
    	this.zone.run(() => {
    		this.showFullScreen = true;
    	})

    }
    this.savedWalletsServiceSub = this.savedWalletsService.serviceStatus$.subscribe((d) => {
    	if ((d == 'ready' || d == 'newWalletAdded') && this.selectedExchange) {
    		this.getWalletsForExchange(this.selectedExchange._name)
    		this.initFromSession()
    	}
  		if (d == 'currentWalletChanged') {
  			this.getWalletsForExchange(this.selectedExchange._name);
  			this.selectedWallet = this.savedWalletsService.getCurrentWallet();
  		}
  	})
  	this.marketBroadcastServiceSub = this.marketBroadcastService.marketStatus$.subscribe(status => {
      if (status == 'changed') {
        var selectedExchangeName = this.marketBroadcastService.getSelectedExchange()
        var selectedExchange = this.exchanges.filter(a => {
	        return selectedExchangeName == a._name
	      })[0]
        if (this.selectedExchange) {
          this.selectedExchange.isSelected = false
        }
        if (selectedExchange)
          selectedExchange.isSelected = true
	      this.selectedExchange = selectedExchange


      }
    })
  }
  getWalletsForExchange(name) {
    if (name == 'eth') {
      this.wallets = this.savedWalletsService.getEthWallets()
    }
    else if (name == 'neo') {
      this.wallets = this.savedWalletsService.getNeoWallets()
    }
    else if (name == 'aion') {
      this.wallets = this.savedWalletsService.getAionWallets()
    }
  }
  setExchangeAndWallet(wallet, exchange) {
  	this.marketBroadcastService.setSelectedExchange(exchange._name)
		this.savedWalletsService.setCurrentWallet(wallet)
  }
  setSelectedExchange(e) {
  	if (this.selectedExchange && this.selectedExchange._name != e._name) {
  		this.exchange = e._name
  		this.wallet = ""
  		this.displayPopup = true
  	}
  }
  onSelectWallet() {
  	if (this.selectedWallet) {
      console.log(this.selectedWallet)
  		this.displayPopup = true
  		this.wallet = this.selectedWallet.address
  		this.exchange = this.selectedExchange._name
  		return
  	}
  }


}
