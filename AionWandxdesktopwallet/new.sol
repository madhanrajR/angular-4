pragma solidity ^0.4.18;

import "./IDataStore.sol";
import "./AuthMultiOwner.sol";
import "./SafeMath.sol";

/**
 * @title DataStore 
 * @dev IDataStore interface implementation
 * @author Dinesh
 */
 contract IDataStore 
{
    // mapping for order matches _orderMatchHash => _orderMatchID => true/false
    mapping (bytes32 => mapping ( bytes32 => bool)) public orderMatches;
    
    //mapping of user accounts to mapping of order hashes to booleans (true = submitted by user, equivalent to offchain signature)
    mapping (address => mapping (bytes32 => bool)) public orders; 
    
    //mapping of user accounts to mapping of order hashes to uints (amount of order that has been filled)
    mapping (address => mapping (bytes32 => uint128)) public orderFills;
    
    // Just to control, some unwanted access or operations, 
    bool public isStoreActive;
    
    // Events
    event StoreActivity(address origin, bytes32 activityCode, bytes32 customMsg);
    
    // Function Definitions
    function changeStoreConfig(bool _activate) public; 
    function isOrderExists(bytes32 _orderHash, address _orderSender) public constant returns (bool);
    function insertOrder(bytes32 _orderHash, address _orderSender, uint128 _amountFilled) public;
    function fillOrder(bytes32 _orderHash, address _orderSender, uint128 _amountFilled, uint128 _totalOrderVolume) public;
    function cancelOrder(bytes32 _orderHash, address _orderSender, uint128 _totalOrderValue) public;
    function isOrderClosed(bytes32 _orderHash, address _orderSender, uint128 _totalValue) public constant returns (bool);
    function orderAmountAvailability(bytes32 _orderHash, address _orderSender,uint128 _amountFilled ) public constant returns (uint128);
    function insertOrderMatch(bytes32 _orderMatchHash, bytes32 _orderMatchID, address _orderMatchSender) public;
}

 contract DataStore is AuthMultiOwner, IDataStore
 {
    using SafeMath for uint128; 
    /*************** Contructor & Configation Functions ************************/
    /**
     * @dev constructor initializes with the owenr and approvers in the contracts
     * @param _newApprover sets the approver for the current setyup
     */
    function DataStore(address _newApprover) public
    {
        owner = msg.sender;
        approver = _newApprover; 
        isStoreActive = true;
    }
    
    /************************** Custom Modifiers ******************************/
    // modifier that checks whether datastore is activ or not 
    modifier onlyWhenActive {
        require(isStoreActive);
        _;
    }
    
    /************************** Functions & Configations **********************/
    /**
     * @dev function allows approver to update the status of the store.
     * @param _activate tells whether the data store is active or not
     */
    function changeStoreConfig(bool _activate) public onlyApprover  
    {
        isStoreActive = _activate;
        StoreActivity(msg.sender, "WDS003", (_activate?bytes32(1):bytes32(0)));
    }
    
    /**
     * @dev function tells whether an order exists or not
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender
     * @return ture/false based on the order existence in orders list
     */
    function isOrderExists(bytes32 _orderHash, address _orderSender) public constant returns (bool) 
    {
        return orders[_orderSender][_orderHash];
    }
    
    /**
     * @dev function that stores the given order details in to the list as a hash
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender
     * @param _amountFilled is the volume of the amount filled
     */
    function insertOrder(bytes32 _orderHash, address _orderSender, uint128 _amountFilled) public onlyWhenActive onlyOwner
    {
        //require(_amountFilled > 0);
        require (_orderSender != 0x0);
        require (!orders[_orderSender][_orderHash]);
        
        // update the hashes list and also amount filled
        orders[_orderSender][_orderHash] = true;
        orderFills[_orderSender][_orderHash] = orderFills[_orderSender][_orderHash].add(_amountFilled);
        StoreActivity(_orderSender, "WDS001", bytes32(_amountFilled));
    }
    
     /**
     * @dev function that stores the given order details in to the list as a hash
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender
     * @param _amountFilled is the volume of the amount filled
     */
    function fillOrder(bytes32 _orderHash, address _orderSender, uint128 _amountFilled, uint128 _totalOrderVolume) public onlyWhenActive onlyOwner
    {
        require(_amountFilled > 0);
        require (_orderSender != 0x0);
        //require (orders[_orderSender][_orderHash]);
        require(orderFills[_orderSender][_orderHash].add(_amountFilled) <= _totalOrderVolume);
        
        // update the hashes list and also amount filled
        orders[_orderSender][_orderHash] = true;
        orderFills[_orderSender][_orderHash] = orderFills[_orderSender][_orderHash].add(_amountFilled);
        StoreActivity(_orderSender, "WDS004", bytes32(_amountFilled));
    } 
    
    /**
     * @dev function cancels the order. Only status will be set to false, but amount remain same
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender
     * @param _totalOrderValue indicates total order value 
     */
    function cancelOrder(bytes32 _orderHash, address _orderSender, uint128 _totalOrderValue) public onlyWhenActive onlyOwner
    {
        require(_orderSender != 0x0);
        require(_totalOrderValue > 0);
        // update the hashes list and also amount filled
        if(orders[_orderSender][_orderHash]) { 
            orderFills[_orderSender][_orderHash] = _totalOrderValue;
        }
        StoreActivity(_orderSender, "WDS002", "");
    }
    /**
     * @dev function to check whethere is already closed or not
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender
     * @param _totalValue indicates total order value 
     */
    function isOrderClosed(bytes32 _orderHash, address _orderSender, uint128 _totalValue) public constant returns (bool)
    {
        return (orders[_orderSender][_orderHash] && orderFills[_orderSender][_orderHash] >= _totalValue);
    }
     /**
     * @dev function to verify the how much value need to complete the order
     * @param _orderHash is the keccak256 hash of the order parameters
     * @param _orderSender is the user who sent the order to this contract.. or simply msg.sender 
     * @param _totalValue indicates total order value 
     */
    function orderAmountAvailability(bytes32 _orderHash, address _orderSender, uint128 _totalValue) public constant returns (uint128)
    {
        require (_totalValue> 0 && orderFills[_orderSender][_orderHash] <= _totalValue);
        require (orders[_orderSender][_orderHash]);
        return _totalValue.sub(orderFills[_orderSender][_orderHash]);
    }
    
    /**
     * @dev function that stores the given order match details in to the list as a hash
     * @param _orderMatchHash is the keccak256 hash of the order match parameters
     * @param _orderMatchID for trace back to database 
     * @param _orderMatchSender is the user who sent the order to this contract.. or simply msg.sender 
     */
    function insertOrderMatch(bytes32 _orderMatchHash, bytes32 _orderMatchID, address _orderMatchSender) public onlyWhenActive onlyOwner
    { 
        require (!orderMatches[_orderMatchHash][_orderMatchID]);
        
        // update the hashes list and also amount filled
        orderMatches[_orderMatchHash][_orderMatchID] = true; 
        StoreActivity(_orderMatchSender, "WDS005", _orderMatchID);
    }
 }