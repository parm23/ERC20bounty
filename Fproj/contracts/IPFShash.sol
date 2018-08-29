pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract IPFShash is Pausable {
    address owner = msg.sender;
    function kill() private {
        if (msg.sender == owner) selfdestruct(owner);
    }
    
    //defining event for setting of the hash
    event HashSet(
    string _message
    );
    bytes32 public ipfsHash;
 
    function sendHash(string x) public {
    
    //using keccack256 (SHA3) to hash the user input data
    //string data must first be must be encode packed in order for keccack operation to be valid
        ipfsHash = keccak256(abi.encodePacked(x));
        
    //logging that a hash has been sent
        emit HashSet("Hash stored successfully!");
    }
    //getter for hashing 
    function getHash() public view returns (bytes32 x) {
        return ipfsHash;
    }
}
