Avoiding Common Attacks

Building Under the Security of ERC-20 and ERC-721 Token Standards

![Screenshot](zeppelin.jpg)

The Zeppelin Token Standads are natively equipped to resist against common attacks. OpenZeppelin is meant to provide secure,
tested and community-audited code. The core development principles and strategies that OpenZeppelin is based on include: security in depth,
simple and modular code, clarity-driven naming conventions, comprehensive unit testing, pre-and-post-condition sanity checks, 
code consistency, and regular audits.


https://openzeppelin.org/api/docs/token_ERC721_ERC721Token.html
https://openzeppelin.org/api/docs/token_ERC20_StandardToken.html

Here are results of an audit conducted on Zeppelin. Here I am focusing in on the ERC20 Standard Token Platform I used:

https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/audit/ZeppelinAudit.md

StandardToken
Implementation of full ERC20 token.

Transfer() and transferFrom() use SafeMath functions, which will cause them to throw instead of returning false. Not a security issue but departs from standard.



function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[_from]);
    require(_value <= allowed[_from][msg.sender]);

    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
    Transfer(_from, _to, _value);
    return true;
  }

  /**
   * Approve the passed address to spend the specified amount of tokens on behalf of msg.sender
   * Beware that changing an allowance with this method brings the risk that someone may use both the old
   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
   
 An emergency freeze was implemented for the sake of token best practice: Pausable from Open Zeppelin https://openzeppelin.org/api/docs/lifecycle_Pausable.html

Functionality: if there is a breach of either the ERC20 or ERC721 token, an owner can freeze those tokens preventing any future movement of those tokens. That's a pretty nice security feature to have, mitigating the cash out of those tokens to USD.
   
   
