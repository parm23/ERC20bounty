pragma solidity ^0.4.24;

contract IPFShash {
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