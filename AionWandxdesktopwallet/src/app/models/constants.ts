export class Constants {
  public static TokenVault: string = '0xbaab5cac3c8ada9f04d987aaeb4267a4d3f692f1';
  public static TokenHistoryUrl: string = 'https://wandxrgdiag.blob.core.windows.net/tokentradedatat1/testtoken7daystrade.json';
  public static ServiceURL: string = 'https://wandx.azure-api.net/web/api/';
  public static CryptoCompareUrl: string = 'https://min-api.cryptocompare.com/data/histoday';
  public static WandxCompareUrl: string = 'http://wandx-api.azurewebsites.net/api/trade/history/hourly/';
  public static ThemedBasketRequest: string = 'https://wandx-api.azurewebsites.net/';
  //public static BashketURL: string = 'https://18.217.72.249:3443/api/portfolio/findPortfolio';
  public static BashketURL: string = 'https://erpt.privatenet.xyz:8443/api/portfolio/findPortfolio';
  public static TxAppnetURL: string = 'https://ropsten.etherscan.io/tx/';
  public static AddressAppnetURL: string = 'https://ropsten.etherscan.io/address/';
  public static EthTokenDetailURL: string = 'https://ropsten.etherscan.io/tokenholdings?a=';
  public static ApiManagementSubscriptionKey: string = 'c807bf6f64494923862a780a305397a2';
  public static AllowedNetwork: any = '3';
  public static WandxExchangeFeeRate: number = 0.00025;
  public static EthExchangeFeeRate: number = 0.001;
  public static OtherExchageFeeRate: number = 0.0015;
  public static EtherTokenId: number = 7;
  public static EtherTokenAddress: string = '0xc377e1b1916ba8825e14ed38cefdff47ec70ee07';
  public static WandxTokenId: number = 2;
  public static WandxTokenAddress: string = '0xeae069eac7c768fd16f677d2e17e150567f512da';
  public static WandxTokenDecimals =  18;
  public static OrderBookContractAddress: string = '0x97f09ec8540f4433f736851d712a55b72c5f8c0f';
  public static CretaeContractAddress: string = '0xd98fd92d7a47ede09e41944f2035bf009c72beb1';
  public static protoStorageAddress: string = '0xCF7a14B50d7fcf6A28EaB42daa2020e4826bB268';
  public static TrasfersProxyAddress: string = '0x59970f5b98edb807d37fbb709f034a4912125f6f';
  public static BlockExpirationWindow = 52000;

  // Neo Start
  public static contractScriptHash: string = '4b6dc098507569b853267a881faaefe15e84c852';
  public static PRIVATENET_RPC_URL: string = 'http://139.59.67.102:30333';
  public static PRIVATENET_URL: string = 'http://139.59.67.102:4000/api/main_net';
  public static NEO_TESTNET_RPC_URL: string = 'https://neotnrpc.wandx.co:8443';
  public static TESTNET_URL: string = 'TestNet';
  public static Script: number = 32;
  //Aion 
  // public static TrasfersProxyaionAddress: string="0xa09e6Ec1D0c705B4cb3489133D4948f6866ec9F963d75586391239D5f9ab0b33";  
  public static TrasfersProxyaionAddress: string="0xA0deb1c740805d7DE01Bfd9Ca0cC167beFb8FE77c656aDA891D114FE0e9819aF";  
  // public static EtherTokenaionAddress: string = '0xA0aF6BAa95c242aa092E43EE9Fc09838E5a29B5521a8c00056730b61F5F316D3';
  public static EtherTokenaionAddress: string = '0xA05182A59a38b83e0dFE5d8615A10066c8C45D87e899cCddaB640e4bECe16bc4';
  public static VBPABIaion : any= [{"constant":false,"inputs":[],"name":"publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"liquidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint128"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"Eblockno","type":"uint128"}],"name":"cancelPortfolio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint128"}],"name":"TotalAssets","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint128"}],"name":"depositTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"assetStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"fundDeposits","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"moveAssets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_askValue","type":"uint128"},{"name":"_expiresAfter","type":"uint128"},{"name":"_assets","type":"address[]"},{"name":"_volumes","type":"uint128[]"},{"name":"_portfolioName","type":"bytes32"}],"name":"updatePortfolio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAssets","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPortfolio","outputs":[{"name":"maker","type":"address"},{"name":"currentOwnerOrSeller","type":"address"},{"name":"valueInEther","type":"uint128"},{"name":"expiresAt","type":"uint128"},{"name":"name","type":"bytes32"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"assets","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_depositor","type":"address"},{"name":"_token","type":"address"}],"name":"balanceOfToken","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_assets","type":"address[]"},{"name":"_volumes","type":"uint128[]"},{"name":"_askValue","type":"uint128"},{"name":"_expiryBlock","type":"uint128"},{"name":"_portfolioName","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_ownerOrSeller","type":"address"},{"indexed":false,"name":"_amount","type":"uint128"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"PortfolioPublsihed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_ownerOrSeller","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"PortfolioEvents","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_ownerOrSeller","type":"address"},{"indexed":false,"name":"_buyer","type":"address"},{"indexed":false,"name":"_amount","type":"uint128"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"PortfolioBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_depositor","type":"address"},{"indexed":false,"name":"_token","type":"address"},{"indexed":false,"name":"_amount","type":"uint128"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_depositor","type":"address"},{"indexed":false,"name":"_token","type":"address"},{"indexed":false,"name":"_amount","type":"uint128"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"withdrawn","type":"event"}];
  // public static VBPExchageAddress : string ="0xa07c185B3C0B07f6871dfa4520ab81be6733C014aaADF615A332186437AB080F"
  // public static VBPExchageAddress:string='0xa0994DC971e2116676DceF80842ff92dB0E0A1FaB11D3D9225Ba728193A5B48B'
  public static VBPExchageAddress:string='0xa0E220203f95435E58dB4Ddd5Fe1ad990DC5b7F608d35a3F3E39Ca29ea5DE357'
  // public static VBPExchangeAbi : any=[{"constant":true,"inputs":[],"name":"a1","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_askValue","type":"uint128"},{"name":"_feeIndex","type":"uint128"}],"name":"getFee","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ethertoken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"temp","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maker","type":"address"},{"name":"_assets","type":"address[]"},{"name":"_volumes","type":"uint128[]"},{"name":"_askValue","type":"uint128"},{"name":"_expiryBlock","type":"uint128"},{"name":"_name","type":"bytes32"}],"name":"createPortfolio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getlength","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_storage","type":"address"},{"name":"_calc","type":"address"},{"name":"_proxy","type":"address"},{"name":"_token","type":"address"}],"name":"updateExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeCalculator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"},{"name":"_assets","type":"address[]"},{"name":"_volumes","type":"uint128[]"},{"name":"_askValue","type":"uint128"},{"name":"_expiryBlock","type":"uint128"},{"name":"_name","type":"bytes32"}],"name":"getPortfolioHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"protostage","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_assets","type":"address[]"},{"name":"_volumes","type":"uint128[]"},{"name":"_askValue","type":"uint128"},{"name":"_expiryBlock","type":"uint128"},{"name":"_name","type":"bytes32"}],"name":"ins","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"portfoioVBPaddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"portfolioAddresss","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_storage","type":"address"},{"name":"_calc","type":"address"},{"name":"_proxy","type":"address"},{"name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_maker","type":"address"},{"indexed":false,"name":"_portfolio","type":"address"},{"indexed":false,"name":"_fee","type":"uint128"},{"indexed":false,"name":"_hash","type":"bytes32"},{"indexed":false,"name":"_message","type":"bytes32"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"port","type":"address"}],"name":"pa","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ass","type":"address[]"}],"name":"asa","type":"event"}];
  public static VBPExchangeAbi:any=[
    {
      "constant": true,
      "inputs": [],
      "name": "a1",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_askValue",
          "type": "uint128"
        },
        {
          "name": "_feeIndex",
          "type": "uint128"
        }
      ],
      "name": "getFee",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ethertoken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_maker",
          "type": "address"
        },
        {
          "name": "_assets",
          "type": "address[]"
        },
        {
          "name": "_volumes",
          "type": "uint128[]"
        },
        {
          "name": "_askValue",
          "type": "uint128"
        },
        {
          "name": "_expiryBlock",
          "type": "uint128"
        },
        {
          "name": "_name",
          "type": "bytes32"
        }
      ],
      "name": "createPortfolio",
      "outputs": [],
      "payable": false,
      "type": "function",
      "stateMutability": "nonpayable"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "transferProxy",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getlength",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_storage",
          "type": "address"
        },
        {
          "name": "_calc",
          "type": "address"
        },
        {
          "name": "_proxy",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "updateExchange",
      "outputs": [],
      "payable": false,
      "type": "function",
      "stateMutability": "nonpayable"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "feeCalculator",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_maker",
          "type": "address"
        },
        {
          "name": "_assets",
          "type": "address[]"
        },
        {
          "name": "_volumes",
          "type": "uint128[]"
        },
        {
          "name": "_askValue",
          "type": "uint128"
        },
        {
          "name": "_expiryBlock",
          "type": "uint128"
        },
        {
          "name": "_name",
          "type": "bytes32"
        }
      ],
      "name": "getPortfolioHash",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "protostage",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "portfoioVBPaddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "portfolioAddresss",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view"
    },
    {
      "inputs": [
        {
          "name": "_storage",
          "type": "address"
        },
        {
          "name": "_calc",
          "type": "address"
        },
        {
          "name": "_proxy",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor",
      "stateMutability": "nonpayable"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_maker",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_portfolio",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_fee",
          "type": "uint128"
        },
        {
          "indexed": false,
          "name": "_hash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "Exchange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "token",
          "type": "address[]"
        }
      ],
      "name": "tokenAddress",
      "type": "event"
    }
  ]
  //public static BashketURLWAN: string = 'http://18.216.117.215:3000/api/portfolio/findPortfolio';
public static ServiceURLWAN: string = 'http://ec2-3-16-169-57.us-east-2.compute.amazonaws.com:8080/api/';
public static TxAppnetURLWAN: string = 'http://47.104.61.26/block/trans/';
public static AddressAppnetURLWAN: string = 'http://47.104.61.26/block/addr/';
public static EthTokenDetailURLWAN: string = 'https://ropsten.etherscan.io/tokenholdings?a=';
public static ApiManagementSubscriptionKeyWAN: string = 'c807bf6f64494923862a780a305397a2';
public static AllowedNetworkWAN: any = '3';
public static WandxExchangeFeeRateWAN: number = 0.00025;
public static EthExchangeFeeRateWAN: number = 0.001;
public static OtherExchageFeeRateWAN: number = 0.0015;
public static EtherTokenIdWAN: number = 7;
public static EtherTokenAddressWAN: string = '0xA05182A59a38b83e0dFE5d8615A10066c8C45D87e899cCddaB640e4bECe16bc4';
public static WandxTokenIdWAN: number = 2;
public static WandxTokenAddressWAN: string = '0xa075de98Fdd37C935FC2814783cb0c1E1bad36dea548252f28D22e8F8faE3B21';
public static WandxTokenDecimalsWAN =  18;
//public static OrderBookContractAddressWAN: string = '0xa0c400f73cA943C92845eb9Bdd3e13842D773527d9709AB1602B3F2fdcC2194d';
public static OrderBookContractAddressWAN: string ='0xA089863591f78Db476f97da483395C912386869C2Ab280b6815E6E6AC7553807'
public static CretaeContractAddressWAN: string = '0x4437bfb7fa27cd72e7adc2000da35649fd376c01';
public static protoStorageAddressWAN: string = '0x11c60465f406b9b67a05a687866c52787f85d51f';
public static TrasfersProxyAddressWAN: string = '0xbfba523d7561b8e6676ede5066e4127854c7197e';
public static BlockExpirationWindowWAN = 52000;
public static TokenAbiWAN: any=[{"constant":false,"inputs":[{"name":"_amount","type":"uint128"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint128"}],"name":"withdrawTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint128"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"safetyWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint128"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint128"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint128"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"moveToSafetyWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disableTx","type":"bool"}],"name":"blockTx","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint128"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint128"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint128"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint128"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint128"}],"name":"Transfer","type":"event"}];
 public static OrderbookContractAbiWAN: any =[{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint128"}],"name":"withdrawTo","type":"function","signature":"0x07802a89"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"approver","type":"function","signature":"0x141a8dd8"},{"outputs":[{"name":"","type":"bool"}],"constant":false,"payable":false,"inputs":[{"name":"_tokensAndAddresses","type":"address[6]"},{"name":"_volumes","type":"uint128[6]"},{"name":"_numBlocksExpires","type":"uint128"},{"name":"_orderType","type":"uint128"},{"name":"_orderHash","type":"bytes32"},{"name":"_publickey","type":"bytes32[3]"}],"name":"fillOrder","type":"function","signature":"0x1969ea90"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_orderHash","type":"bytes32"},{"name":"_orderCreator","type":"address"},{"name":"_totalOrderVolume","type":"uint128"},{"name":"_feeToken","type":"address"},{"name":"_orderValue","type":"uint128"}],"name":"cancelOrder","type":"function","signature":"0x19cf9991"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_newAddress","type":"address"}],"name":"addAuthorizedAddress","type":"function","signature":"0x42f1181e"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"etherRefAddress","type":"function","signature":"0x43f6e4b0"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[{"name":"","type":"uint128"}],"name":"listTokens","type":"function","signature":"0x592c7db3"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"safetyWallet","type":"function","signature":"0x607b9f97"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"_orderHash","type":"bytes32"},{"name":"_orderCreator","type":"address"},{"name":"_totalOrderVolume","type":"uint128"}],"name":"orderAvailability","type":"function","signature":"0x65b4408d"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"dataStore","type":"function","signature":"0x660d0d67"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_newAddress","type":"address"}],"name":"removeAuthorizedAddress","type":"function","signature":"0x70712939"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"_depositor","type":"address"}],"name":"balanceOf","type":"function","signature":"0x70a08231"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"baseTokenAddress","type":"function","signature":"0x7cb374bd"},{"outputs":[{"name":"","type":"address"}],"constant":true,"payable":false,"inputs":[],"name":"owner","type":"function","signature":"0x8da5cb5b"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_tradeActive","type":"bool"},{"name":"_dataStore","type":"address"},{"name":"_isLocked","type":"bool"}],"name":"changeTraderConfig","type":"function","signature":"0x8e91ff95"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"_value","type":"uint128"},{"name":"_feeToken","type":"address"}],"name":"calcTradeFee","type":"function","signature":"0x9c678c55"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_ether","type":"address"},{"name":"_baseTokenFee","type":"uint128"},{"name":"_etherFee","type":"uint128"},{"name":"_normalTokenFee","type":"uint128"}],"name":"updateFeeCalcConfig","type":"function","signature":"0x9e77f568"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"fundDeposits","type":"function","signature":"0x9f26d0ad"},{"outputs":[{"name":"","type":"bool"}],"constant":true,"payable":false,"inputs":[],"name":"isLocked","type":"function","signature":"0xa4e2d634"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","type":"function","signature":"0xa6f9dae1"},{"outputs":[{"name":"","type":"bool"}],"constant":true,"payable":false,"inputs":[{"name":"","type":"address"}],"name":"authorized","type":"function","signature":"0xb9181611"},{"outputs":[],"constant":false,"payable":false,"inputs":[],"name":"moveToSafetyWallet","type":"function","signature":"0xb9b1c90c"},{"outputs":[{"name":"","type":"bool"}],"constant":true,"payable":false,"inputs":[],"name":"isTradingActive","type":"function","signature":"0xc53d4d53"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_newApprover","type":"address"}],"name":"changeApprover","type":"function","signature":"0xc6c599c1"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"","type":"uint128"}],"name":"exFees","type":"function","signature":"0xcdf7edf7"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_to","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint128"}],"name":"withdrawTokenTo","type":"function","signature":"0xe39a1a98"},{"outputs":[],"constant":false,"payable":true,"inputs":[{"name":"_depositor","type":"address"}],"name":"deposit","type":"function","signature":"0xf340fa01"},{"outputs":[{"name":"","type":"uint128"}],"constant":true,"payable":false,"inputs":[{"name":"_depositor","type":"address"},{"name":"_token","type":"address"}],"name":"balanceOfToken","type":"function","signature":"0xf59e38b7"},{"outputs":[{"name":"","type":"bool"}],"constant":true,"payable":false,"inputs":[{"name":"_orderHash","type":"bytes32"},{"name":"_orderCreator","type":"address"}],"name":"oredrAlreadyExists","type":"function","signature":"0xf8da6358"},{"outputs":[],"constant":false,"payable":false,"inputs":[{"name":"_depositor","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint128"}],"name":"depositTokens","type":"function","signature":"0xfc2dbd78"},{"outputs":[{"name":"","type":"bool"}],"constant":true,"payable":false,"inputs":[{"name":"_orderHash","type":"bytes32"},{"name":"_orderCreator","type":"address"},{"name":"_totalOrderVolume","type":"uint128"}],"name":"isOrderClosedOrFulfilled","type":"function","signature":"0xfe05680e"},{"outputs":[],"payable":false,"inputs":[{"name":"_newApprover","type":"address"},{"name":"_newWallet","type":"address"},{"name":"_dataStore","type":"address"}],"name":"","type":"constructor"},{"outputs":[],"payable":true,"inputs":[],"name":"","type":"fallback"},{"outputs":[],"inputs":[{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"isValidSignature","type":"bool"},{"indexed":false,"name":"activityCode","type":"bytes32"}],"name":"SingatureValidated","anonymous":false,"type":"event","signature":"0xc6e5737b5291059e73cf84ea7ef3bc9cc7c4647d417ae173b00594258b1c34ec"},{"outputs":[],"inputs":[{"indexed":false,"name":"origin","type":"address"},{"indexed":false,"name":"activityCode","type":"bytes32"},{"indexed":false,"name":"customMsg","type":"bytes32"}],"name":"TradeActivity","anonymous":false,"type":"event","signature":"0xf472b5b323d9c017220f7ef21e4349f29af6059cf091e94768b72dcd8f7a284a"},{"outputs":[],"inputs":[{"indexed":false,"name":"creator","type":"address"},{"indexed":false,"name":"orderHash","type":"bytes32"},{"indexed":false,"name":"activityCode","type":"bytes32"}],"name":"OrderOps","anonymous":false,"type":"event","signature":"0x055b768e9ec537c74b758aeea00a4a32cdde56a3b3b838411e1405a265f487d1"},{"outputs":[],"inputs":[{"indexed":false,"name":"origin","type":"address"},{"indexed":false,"name":"seller","type":"address"},{"indexed":false,"name":"buyer","type":"address"},{"indexed":false,"name":"orderHash","type":"bytes32"},{"indexed":false,"name":"activityCode","type":"bytes32"},{"indexed":false,"name":"customMsg","type":"bytes32"}],"name":"OrderFills","anonymous":false,"type":"event","signature":"0x40526f2bf409e29df5e6f0b28485162d3e53aeacfd7e570a49874cf5128b1732"},{"outputs":[],"inputs":[{"indexed":false,"name":"orderHash","type":"bytes32"},{"indexed":false,"name":"expiryBlockNumber","type":"uint128"},{"indexed":false,"name":"activityCode","type":"bytes32"}],"name":"OrderExpired","anonymous":false,"type":"event","signature":"0xf2f00589e9b5be2e78d851af47cabb77bd7bd2768f1a7c27aefbc70c11ceb75b"},{"outputs":[],"inputs":[{"indexed":false,"name":"origin","type":"address"},{"indexed":false,"name":"_accHolder","type":"address"},{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint128"},{"indexed":false,"name":"activityCode","type":"bytes32"},{"indexed":false,"name":"customMsg","type":"bytes32"}],"name":"LockerActivity","anonymous":false,"type":"event","signature":"0x207f794e7010a81846d1b81f2f6833ec4f1e8571adab26d2afbce5a420a9460a"},{"outputs":[],"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"caller","type":"address"}],"name":"AuthorizationAdded","anonymous":false,"type":"event","signature":"0xab74326a695565fe84aac6539b84bcfe20204c92ad5979660401e38ae09d1b05"},{"outputs":[],"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"caller","type":"address"}],"name":"AuthorizationRemoved","anonymous":false,"type":"event","signature":"0x0493a72733d38301bf0606a2ab082ea422f84e473e16b348c895864e93bc2af5"},{"outputs":[],"inputs":[{"indexed":false,"name":"oldApprover","type":"address"},{"indexed":false,"name":"newApprover","type":"address"}],"name":"ApproverChanged","anonymous":false,"type":"event","signature":"0xa53935b08c042831464f1b811e652d37e0db7f6b818e8bc174097b18e09cf9ae"},{"outputs":[],"inputs":[{"indexed":false,"name":"oldApprover","type":"address"},{"indexed":false,"name":"newApprover","type":"address"}],"name":"OwnerChanged","anonymous":false,"type":"event","signature":"0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c"}]
// public static OrderbookContractAbiWAN: any = [
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_amount",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "withdrawTo",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "approver",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_tokensAndAddresses",
// 				"type": "address[6]"
// 			},
// 			{
// 				"name": "_volumes",
// 				"type": "uint128[6]"
// 			},
// 			{
// 				"name": "_numBlocksExpires",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_orderType",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_orderHash",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "fillOrder",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"name": "_orderCreator",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_totalOrderVolume",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_feeToken",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_orderValue",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "cancelOrder",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_newAddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "addAuthorizedAddress",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "etherRefAddress",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "exFees",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "safetyWallet",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"name": "_orderCreator",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_totalOrderVolume",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "orderAvailability",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "dataStore",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_newAddress",
// 				"type": "address"
// 			}
// 		],
// 		"name": "removeAuthorizedAddress",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_depositor",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "baseTokenAddress",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_tradeActive",
// 				"type": "bool"
// 			},
// 			{
// 				"name": "_dataStore",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_isLocked",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "changeTraderConfig",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "listTokens",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_value",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_feeToken",
// 				"type": "address"
// 			}
// 		],
// 		"name": "calcTradeFee",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_baseToken",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_ether",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_baseTokenFee",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_etherFee",
// 				"type": "uint128"
// 			},
// 			{
// 				"name": "_normalTokenFee",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "updateFeeCalcConfig",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "fundDeposits",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "isLocked",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "changeOwner",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "authorized",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [],
// 		"name": "moveToSafetyWallet",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "isTradingActive",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_newApprover",
// 				"type": "address"
// 			}
// 		],
// 		"name": "changeApprover",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_token",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_amount",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "withdrawTokenTo",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_depositor",
// 				"type": "address"
// 			}
// 		],
// 		"name": "deposit",
// 		"outputs": [],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_depositor",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_token",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOfToken",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint128"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"name": "_orderCreator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "oredrAlreadyExists",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_depositor",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_token",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_amount",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "depositTokens",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"name": "_orderCreator",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_totalOrderVolume",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "isOrderClosedOrFulfilled",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"name": "_newApprover",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_newWallet",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_dataStore",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "fallback"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "origin",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "activityCode",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "customMsg",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "TradeActivity",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "creator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "activityCode",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "OrderOps",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "origin",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "seller",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "buyer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "activityCode",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "customMsg",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "OrderFills",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "orderHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "expiryBlockNumber",
// 				"type": "uint128"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "activityCode",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "OrderExpired",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "origin",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "_accHolder",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "token",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "amount",
// 				"type": "uint128"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "activityCode",
// 				"type": "bytes32"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "customMsg",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "LockerActivity",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "target",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "caller",
// 				"type": "address"
// 			}
// 		],
// 		"name": "AuthorizationAdded",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "target",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "caller",
// 				"type": "address"
// 			}
// 		],
// 		"name": "AuthorizationRemoved",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "oldApprover",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "newApprover",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ApproverChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "oldApprover",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "newApprover",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnerChanged",
// 		"type": "event"
// 	}
// ]
// public static AionbasketURL:string= 'http://18.191.165.67:4000/api/portfolio/findPortfolio';
  public static AionbasketURL:string= 'http://52.15.173.92:4000/api/portfolio/findPortfolio';
  // public static GNTTokenaddress: string="0xA0420aE25ED3DB234D2c4cdDC54Fb7B0F403d75a5F518Fb22c90ED7BD3645879"
  public static  GNTTokenaddress: string="0xa02DdfDE7793df4A3DaD2Ec7BF1b61dF3510f6b6aCa9ACAeC7F8C45513ee81eA";
  // public static ZRXTokenaddress: string ="0xA056F8cf401Aa669AF7eBE95Ee12EE3cFcc8c36b37D8f1998805B9510b1B4Cd8"
  public static ZRXTokenaddress: string ="0xa0f6c42CAe9C8dF4a1D3E88D6BbA3E38b1d0Ed35044425ba9622A33b8290A45B";
  // public static QTUMTokenaddress: string ="0xa0730342cf2b357Ec61b9a1280d8b4b95f36182F39B1264aED8Cc5Eaf1B6B638"
  public static QTUMTokenaddress: string ="0xA00064428706046AD0caEe1F4a511cd6D255a6E93BAD8100723aC3572eAd495B";
  // public static sandTokenaddress: string ="0xa0A738b1FC635D671bdD041ccCD10371906fc9a425f87c6bE137FF6dDeb271c9"
  public static sandTokenaddress: string ="0xa01Ad1a819279a0743cd1Af3E6B9DED0Cf6B07a3B24b83ccB98E36F9c44b68Fc";
  // public static powrTokenAddress: string ="0xA0bFbbddeF518e786a699A40B0036AF8333D8Ce92B4a020a2D25eB9d6B4Dd8D5"
  public static powrTokenAddress: string ="0xa0711b3C3982dC23A2Ca72BdfeB2F2E3C32D305F4815d4675b653E11b2Ec50E8";
  // public static wandTokenAddress: string = "0xA08c5Bf2DE877B06bc1903446635c4Aa66b50BAd2B1e197323249Ca8215052c9"
  public static wandTokenAddress: string = "0xa075de98Fdd37C935FC2814783cb0c1E1bad36dea548252f28D22e8F8faE3B21";
//  public static AionbasketURL:string= 'http://localhost:4000/api/portfolio/findPortfolio';
  
  public static EtherTokenAbi: any=[{"constant":false,"inputs":[{"name":"_amount","type":"uint128"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint128"}],"name":"withdrawTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint128"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"safetyWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint128"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint128"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint128"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"moveToSafetyWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disableTx","type":"bool"}],"name":"blockTx","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint128"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint128"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint128"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint128"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint128"}],"name":"Transfer","type":"event"}];
  public static TranferProxyAbi: any=[{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint128"}],"name":"transferFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_storage","type":"address"},{"name":"_wallet","type":"address"}],"name":"registerConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"protostage","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_storage","type":"address"},{"name":"_wallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
  //TODO change to 0xa1... and update in neo.service.ts
  public static TAUsage_WithdrawalAddress: number = 164;
  public static TAUsage_NEP5AssetID: number = 162;
  public static TAUsage_SystemAssetID: number = 163;
  public static TAUsage_WithdrawalStage: number = 161;
  public static TAUsage_WithdrawalAmount: number = 241;
  public static Mark: string = '5000000000000000000000000000000000000000000000000000000000000000';
  public static Withdraw: string = '5100000000000000000000000000000000000000000000000000000000000000';

  public static NEO_ASSET_ID: string = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
  public static NEO_GAS_ASSET_ID: string = '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7';
  public static WAND_NEO_ASSET_ID: string = '4c87396582bdc9daf8df0470f175c79021190b49';

  public static NEO_SERVER_URL_PRIVETNET: string = 'http://139.59.94.223:3000/api/bc/getOrderDetails';
  public static NEO_SERVER_URL_STAKE_PRIVETNET: string = 'http://139.59.94.223:3000/api/bc/getOrderDetails';
  public static NEO_SERVER_URL_TESTNET: string = 'http://neotnapi.wandx.co/api/bc/getOrderDetails';
  public static NEO_SERVER_URL_STAKE_TESTNET: string = 'http://neotnapi.wandx.co/api/bc/getOrderDetails';

  public static NEO_SERVER_URL: string = Constants.NEO_SERVER_URL_TESTNET;
  public static NEO_SERVER_URL_STAKE: string = Constants.NEO_SERVER_URL_STAKE_TESTNET;

  public static RPC_URL = Constants.NEO_TESTNET_RPC_URL;
  public static NEOSCAN_URL = Constants.TESTNET_URL;
  public static NEO_TESTNET_TOKENDETAIL = 'https://neoscan-testnet.io/api/test_net/v1/get_balance/';
  // Neo End


  public static TokenAbi: any = [{
    'constant': false,
    'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}],
    'name': 'approve',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}],
    'name': 'transferFrom',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_subtractedValue', 'type': 'uint256'}],
    'name': 'decreaseApproval',
    'outputs': [{'name': 'success', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_owner', 'type': 'address'}],
    'name': 'balanceOf',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}],
    'name': 'transfer',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_addedValue', 'type': 'uint256'}],
    'name': 'increaseApproval',
    'outputs': [{'name': 'success', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_spender', 'type': 'address'}],
    'name': 'allowance',
    'outputs': [{'name': 'remaining', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': true, 'name': 'owner', 'type': 'address'}, {
      'indexed': true,
      'name': 'spender',
      'type': 'address'
    }, {'indexed': false, 'name': 'value', 'type': 'uint256'}],
    'name': 'Approval',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': true, 'name': 'from', 'type': 'address'}, {'indexed': true, 'name': 'to', 'type': 'address'}, {
      'indexed': false,
      'name': 'value',
      'type': 'uint256'
    }],
    'name': 'Transfer',
    'type': 'event'
  }];
  public static OrderbookContractAbi: any = [{
    'constant': true,
    'inputs': [],
    'name': 'dataStore',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {'name': '_volumes', 'type': 'uint256[5]'}, {
      'name': '_orderMatchID',
      'type': 'bytes32'
    }, {'name': '_expiryBlockNumber', 'type': 'uint256'}],
    'name': 'orderMatchHash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_sellToken', 'type': 'address'}, {'name': '_buyToken', 'type': 'address'}, {
      'name': '_totalOrderVolume',
      'type': 'uint256'
    }, {'name': '_priceRate', 'type': 'uint256'}, {'name': '_numBlocksExpires', 'type': 'uint256'}, {
      'name': '_orderCreator',
      'type': 'address'
    }, {'name': '_orderType', 'type': 'uint256'}, {'name': '_orderID', 'type': 'bytes32'}, {'name': '_feeToken', 'type': 'address'}],
    'name': 'orderHash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
      'name': '_totalOrderVolume',
      'type': 'uint256'
    }],
    'name': 'orderAvailability',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_depositor', 'type': 'address'}],
    'name': 'balanceOf',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}],
    'name': 'oredrAlreadyExists',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'isTradingActive',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
      'name': '_totalOrderVolume',
      'type': 'uint256'
    }],
    'name': 'isOrderClosedOrFulfilled',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'isLocked',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'address'}],
    'name': 'fundDeposits',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_depositor', 'type': 'address'}, {'name': '_token', 'type': 'address'}],
    'name': 'balanceOfToken',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'baseTokenAddress',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'address'}],
    'name': 'authorized',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'uint256'}],
    'name': 'exFees',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'safetyWallet',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'etherRefAddress',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'approver',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_msgHash', 'type': 'bytes32'}, {'name': 'v', 'type': 'uint8'}, {'name': 'r', 'type': 'bytes32'}, {
      'name': 's',
      'type': 'bytes32'
    }],
    'name': 'ecrecovery',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_signer', 'type': 'address'}, {'name': '_orderHash', 'type': 'bytes32'}, {
      'name': 'v',
      'type': 'uint8'
    }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}],
    'name': 'verifySignature',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_value', 'type': 'uint256'}, {'name': '_feeToken', 'type': 'address'}],
    'name': 'calcTradeFee',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'uint256'}],
    'name': 'listTokens',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'}, {
    'constant': false,
    'inputs': [{'name': '_newAddress', 'type': 'address'}],
    'name': 'addAuthorizedAddress',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
    'name': 'withdrawTokenTo',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
      'indexed': false,
      'name': 'activityCode',
      'type': 'bytes32'
    }, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
    'name': 'TradeActivity',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_depositor', 'type': 'address'}],
    'name': 'deposit',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'signer', 'type': 'address'}, {
      'indexed': false,
      'name': 'isValidSignature',
      'type': 'bool'
    }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
    'name': 'SingatureValidated',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_sellToken', 'type': 'address'}, {'name': '_buyToken', 'type': 'address'}, {
      'name': '_totalOrderVolume',
      'type': 'uint256'
    }, {'name': '_priceRate', 'type': 'uint256'}, {'name': '_numBlocksExpires', 'type': 'uint256'}, {
      'name': '_orderCreator',
      'type': 'address'
    }, {'name': '_orderType', 'type': 'uint256'}, {'name': '_orderID', 'type': 'bytes32'}, {'name': '_feeToken', 'type': 'address'}],
    'name': 'createOrder',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'oldApprover', 'type': 'address'}, {'indexed': false, 'name': 'newApprover', 'type': 'address'}],
    'name': 'OwnerChanged',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_newOwner', 'type': 'address'}],
    'name': 'changeOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'creator', 'type': 'address'}, {
      'indexed': false,
      'name': 'orderHash',
      'type': 'bytes32'
    }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
    'name': 'OrderOps',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
      'name': '_totalOrderVolume',
      'type': 'uint256'
    }, {'name': '_feeToken', 'type': 'address'}, {'name': '_orderValue', 'type': 'uint256'}],
    'name': 'cancelOrder',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{'name': '_newApprover', 'type': 'address'}, {'name': '_newWallet', 'type': 'address'}, {
      'name': '_dataStore',
      'type': 'address'
    }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
  }, {
    'constant': false,
    'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {
      'name': '_volumes',
      'type': 'uint256[6]'
    }, {'name': '_numBlocksExpires', 'type': 'uint256'}, {'name': '_orderType', 'type': 'uint256'}, {
      'name': 'v',
      'type': 'uint8'
    }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}, {'name': '_orderID', 'type': 'bytes32'}],
    'name': 'fillOrder',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
      'indexed': false,
      'name': 'seller',
      'type': 'address'
    }, {'indexed': false, 'name': 'buyer', 'type': 'address'}, {
      'indexed': false,
      'name': 'orderHash',
      'type': 'bytes32'
    }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
    'name': 'OrderFills',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'moveToSafetyWallet',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'orderHash', 'type': 'bytes32'}, {
      'indexed': false,
      'name': 'expiryBlockNumber',
      'type': 'uint256'
    }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
    'name': 'OrderExpired',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_baseToken', 'type': 'address'}, {'name': '_ether', 'type': 'address'}, {
      'name': '_baseTokenFee',
      'type': 'uint256'
    }, {'name': '_etherFee', 'type': 'uint256'}, {'name': '_normalTokenFee', 'type': 'uint256'}],
    'name': 'updateFeeCalcConfig',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_tradeActive', 'type': 'bool'}, {'name': '_dataStore', 'type': 'address'}, {'name': '_isLocked', 'type': 'bool'}],
    'name': 'changeTraderConfig',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'oldApprover', 'type': 'address'}, {'indexed': false, 'name': 'newApprover', 'type': 'address'}],
    'name': 'ApproverChanged',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'target', 'type': 'address'}, {'indexed': false, 'name': 'caller', 'type': 'address'}],
    'name': 'AuthorizationAdded',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'target', 'type': 'address'}, {'indexed': false, 'name': 'caller', 'type': 'address'}],
    'name': 'AuthorizationRemoved',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
      'indexed': false,
      'name': '_accHolder',
      'type': 'address'
    }, {'indexed': false, 'name': 'token', 'type': 'address'}, {'indexed': false, 'name': 'amount', 'type': 'uint256'}, {
      'indexed': false,
      'name': 'activityCode',
      'type': 'bytes32'
    }, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
    'name': 'LockerActivity',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [{'name': '_newApprover', 'type': 'address'}],
    'name': 'changeApprover',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
    'name': 'withdrawTo',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_newAddress', 'type': 'address'}],
    'name': 'removeAuthorizedAddress',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {
      'name': '_volumes',
      'type': 'uint256[5]'
    }, {'name': '_expiryBlockNumber', 'type': 'uint256'}, {'name': '_orderMatchID', 'type': 'bytes32'}, {
      'name': 'v',
      'type': 'uint8'
    }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}],
    'name': 'fillOrderMatch',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_depositor', 'type': 'address'}, {'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
    'name': 'depositTokens',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }];
  public static createPortfolio: any = [{
    'anonymous': false,
    'inputs': [{'indexed': false, 'name': '_maker', 'type': 'address'}, {
      'indexed': false,
      'name': '_portfolio',
      'type': 'address'
    }, {'indexed': false, 'name': '_fee', 'type': 'uint256'}, {'indexed': false, 'name': '_hash', 'type': 'bytes32'}, {
      'indexed': false,
      'name': '_message',
      'type': 'bytes32'
    }],
    'name': 'Exchange',
    'type': 'event'
  }, {
    'constant': false,
    'inputs': [
      {'name': '_maker', 'type': 'address'},
      {'name': '_assets', 'type': 'address[]'},
      {'name': '_volumes', 'type': 'uint256[]'},
      {'name': '_askValue', 'type': 'uint256'},
      {'name': '_expiryBlock', 'type': 'uint256'},
      {'name': '_name', 'type': 'bytes32'}],
    'name': 'createPortfolio',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_storage', 'type': 'address'}, {'name': '_calc', 'type': 'address'}, {
      'name': '_proxy',
      'type': 'address'
    }, {'name': '_token', 'type': 'address'}],
    'name': 'updateExchange',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{'name': '_storage', 'type': 'address'}, {'name': '_calc', 'type': 'address'}, {
      'name': '_proxy',
      'type': 'address'
    }, {'name': '_token', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'ethertoken',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'feeCalculator',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_askValue', 'type': 'uint256'}, {'name': '_feeIndex', 'type': 'uint256'}],
    'name': 'getFee',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_maker', 'type': 'address'}, {'name': '_assets', 'type': 'address[]'}, {
      'name': '_volumes',
      'type': 'uint256[]'
    }, {'name': '_askValue', 'type': 'uint256'}, {'name': '_expiryBlock', 'type': 'uint256'}, {'name': '_name', 'type': 'bytes32'}],
    'name': 'getPortfolioHash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'protostage',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'transferProxy',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'version',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }];
  public static VBPABI: any = [
    {
      'constant': false,
      'inputs': [],
      'name': 'publish',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [],
      'name': 'liquidate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [{'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
      'name': 'depositTokens',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [{'name': '', 'type': 'address'}],
      'name': 'assetStatus',
      'outputs': [{'name': '', 'type': 'bool'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [{'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
      'name': 'withdrawToken',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'address'}],
      'name': 'fundDeposits',
      'outputs': [{'name': '', 'type': 'uint256'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [],
      'name': 'buy',
      'outputs': [],
      'payable': true,
      'stateMutability': 'payable',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [{'name': '', 'type': 'uint256'}],
      'name': 'listAssets',
      'outputs': [{'name': '', 'type': 'address'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [],
      'name': 'cancelPortfolio',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [{'name': '_askValue', 'type': 'uint256'}, {'name': '_expiresAfter', 'type': 'uint256'}, {
        'name': '_assets',
        'type': 'address[]'
      }, {'name': '_volumes', 'type': 'uint256[]'}, {'name': '_portfolioName', 'type': 'bytes32'}],
      'name': 'updatePortfolio',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [],
      'name': 'currentPortfolio',
      'outputs': [{'name': 'maker', 'type': 'address'}, {'name': 'currentOwnerOrSeller', 'type': 'address'}, {
        'name': 'valueInEther',
        'type': 'uint256'
      }, {'name': 'expiresAt', 'type': 'uint256'}, {'name': 'name', 'type': 'bytes32'}, {'name': 'status', 'type': 'uint8'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [{'name': '', 'type': 'address'}],
      'name': 'assets',
      'outputs': [{'name': '', 'type': 'uint256'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [{'name': '_depositor', 'type': 'address'}, {'name': '_token', 'type': 'address'}],
      'name': 'balanceOfToken',
      'outputs': [{'name': '', 'type': 'uint256'}],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }, {
      'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_assets', 'type': 'address[]'}, {
        'name': '_volumes',
        'type': 'uint256[]'
      }, {'name': '_askValue', 'type': 'uint256'}, {'name': '_expiryBlock', 'type': 'uint256'}, {
        'name': '_portfolioName',
        'type': 'bytes32'
      }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
    }, {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'}, {
      'anonymous': false,
      'inputs': [{'indexed': false, 'name': '_ownerOrSeller', 'type': 'address'}, {
        'indexed': false,
        'name': '_amount',
        'type': 'uint256'
      }, {'indexed': false, 'name': '_message', 'type': 'bytes32'}],
      'name': 'PortfolioPublsihed',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': false, 'name': '_ownerOrSeller', 'type': 'address'}, {
        'indexed': false,
        'name': '_message',
        'type': 'bytes32'
      }],
      'name': 'PortfolioEvents',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': false, 'name': '_ownerOrSeller', 'type': 'address'}, {
        'indexed': false,
        'name': '_buyer',
        'type': 'address'
      }, {'indexed': false, 'name': '_amount', 'type': 'uint256'}, {'indexed': false, 'name': '_message', 'type': 'bytes32'}],
      'name': 'PortfolioBought',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': false, 'name': '_depositor', 'type': 'address'}, {
        'indexed': false,
        'name': '_token',
        'type': 'address'
      }, {'indexed': false, 'name': '_amount', 'type': 'uint256'}, {'indexed': false, 'name': '_message', 'type': 'bytes32'}],
      'name': 'Deposited',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': false, 'name': '_depositor', 'type': 'address'}, {
        'indexed': false,
        'name': '_token',
        'type': 'address'
      }, {'indexed': false, 'name': '_amount', 'type': 'uint256'}, {'indexed': false, 'name': '_message', 'type': 'bytes32'}],
      'name': 'withdrawn',
      'type': 'event'
    }];
  public static ProtoStorage: any = [{
    'constant': false,
    'inputs': [{'name': '_newPortfolio', 'type': 'address'}, {'name': '_maker', 'type': 'address'}],
    'name': 'addPortfolio',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_publisher', 'type': 'address'}],
    'name': 'registerPublisher',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{'name': '_publisher', 'type': 'address'}],
    'name': 'removePublisher',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'address'}],
    'name': 'exchanges',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '_publisher', 'type': 'address'}],
    'name': 'IsExchangeAllowed',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'uint256'}],
    'name': 'listExchange',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'uint256'}],
    'name': 'listPortfolios',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{'name': '', 'type': 'address'}],
    'name': 'portfolios',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }];

  // themed basket for app(QA)
  public static Decentralised_exhchange_tokensApp: any = ['0x7354b4cea1cb8188a290b857132cd1214bd1cbbc', '0x2c94bba009e0133f5944fa25944edc44427db790'];
  public static Decentralised_insurance_tokensApp: any = ['0x2c94bba009e0133f5944fa25944edc44427db790', '0xc8f0c992660666b64596c452fc0e7e6b07a448c2'];
  public static Decentralised_identity_tokensApp: any = ['0x7354b4cea1cb8188a290b857132cd1214bd1cbbc', '0x2c94bba009e0133f5944fa25944edc44427db790', '0xc8f0c992660666b64596c452fc0e7e6b07a448c2'];


  //themed basket for exchange(PROD)
  public static Decentralised_exhchange_tokens: any = ['0xdd974d5c2e2928dea5f71b9825b8b646686bd200', '0x27f610bf36eca0939093343ac28b1534a721dbb4'];

  public static Decentralised_insurance_tokens: any = ['0x52a7cb918c11a16958be40cba7e31e32a499a465', '0x1063ce524265d5a3a624f4914acd573dd89ce988'];

  public static Decentralised_identity_tokens: any = ['0xB236E2477B8ed34B203B60e2b88884ee5b31a3c3'];

  public static Low_market_cap_ERC20_tokens: any = ['0x52a7cb918c11a16958be40cba7e31e32a499a465', '0x27f610bf36eca0939093343ac28b1534a721dbb4', '0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97'];
}
