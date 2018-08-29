pragma solidity ^0.4.23;

//importing openzeppelin library 
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract LaunchERC721 is ERC721Token {
    address owner = msg.sender;
    
    //inserting kill switch
    function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }
    
    //ERC721 token standard
    constructor (string _name, string _symbol) public
        ERC721Token(_name, _symbol)
    {
    }

    /**
    * Custom accessor to mint a unique token
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string  _tokenURI
    ) public
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }
}
