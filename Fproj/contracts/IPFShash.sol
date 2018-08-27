pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract IPFShash is Pausable {
    address owner = msg.sender;
    function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }
    event HashSet(
    string _message
    );
    bytes32 public ipfsHash;
 
    function sendHash(string x) public {
        ipfsHash = keccak256(abi.encodePacked(x));

        emit HashSet("Hash stored successfully!");
    }

    function getHash() public view returns (bytes32 x) {
        return ipfsHash;
    }
}