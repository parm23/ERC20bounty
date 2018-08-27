pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract NewToken is StandardToken {
  string public name = "New";
  string public symbol = "NT";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 100000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
