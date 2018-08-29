pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract LaunchERC721 is ERC721Token, Pausable {
    event Paused();
    event Unpaused();

    bool public paused = false;
    address owner = msg.sender;
    function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }
    constructor (string _name, string _symbol) public
        ERC721Token(_name, _symbol)
    {
    }

    /**
   * @dev called by the owner to pause, triggers stopped state
   */
    modifier whenNotPaused() {
        require(!paused);
        _;
    }

    modifier whenPaused() {
        require(paused);
        _;
    }

    /**
    * Custom accessor to mint a unique token
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string  _tokenURI
    ) public whenNotPaused
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }
    /**
   * @dev called by the owner to pause, triggers stopped state
   */
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
