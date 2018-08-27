pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract NewToken is StandardToken {
  string public name = "New";
  string public symbol = "NT";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 100000;
  address owner = msg.sender;
  function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
