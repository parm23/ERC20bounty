pragma solidity ^0.4.23;

//imporint openzeppelin library to have access to ERC20 token standard functions
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

//Initializing custom ERC20 token launch parameters
contract NewToken is StandardToken {
  string public name = "New";
  string public symbol = "NT";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 100000;
  address owner;
  function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }

//constructor implemented with parameters set above and capturing owner
  constructor() public {
    owner = msg.sender;
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
