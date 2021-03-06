pragma solidity ^0.4.23;

//imporint openzeppelin library to have access to ERC20 token standard functions
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

//Initializing custom ERC20 token launch parameters
contract NewToken is StandardToken, Pausable {

    string public name = "New";
    string public symbol = "NT";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 100000;
    address owner;
    bool public paused = false;

    event Paused();
    event Unpaused();

//constructor implemented with parameters set above and capturing owner
    constructor() public  {
        owner = msg.sender;
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
    /**
   * @dev called by the owner to pause, triggers stopped state
   */
    
    //definiing modifiers for requirements for whenNotPaused
    modifier whenNotPaused() {
        require(!paused);
        _;
    }

    //definiing modifiers for requirements for whenPaused
    modifier whenPaused() {
        require(paused);
        _;
    }

    //kill switch
    function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }

    //defining function to pause contract
    function pause() public onlyOwner whenNotPaused {
        paused = true;
        emit Paused();
    }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
    function unpause() public onlyOwner whenPaused {
        paused = false;
        emit Unpaused();
    }
}
