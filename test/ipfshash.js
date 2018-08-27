const SHA3 = require('sha3');
var IPFShash = artifacts.require("./IPFShash.sol");
sha3_256 = require('js-sha3').sha3_256;
keccak256 = require('js-sha3').keccak256;


contract('IPFShash', function(accounts) {
  const SHA3 = require('sha3');
  d = new SHA3.SHA3Hash(256);
  d.update('yes');
  d.digest('hex');

  it("...should store the has of the value 'yes'.", function() {
    return IPFShash.deployed().then(function(instance) {
      ipfsInstance = instance;

      return ipfsInstance.sendHash('yes', {from: accounts[0]});
    }).then(function() {
      return ipfsInstance.ipfsHash.call();
    }).then(function(ipfsHash) {
      assert.equal(ipfsHash, 0x90dfb8fa37079daea9a1acb3e423e2351f0ba3fb27cf55bfa41ad2f8c58baea9, "The hash of the value 'yes' was not stored.");
    });
  });

  it("...should store the hash of the value '5'.", function() {
    return IPFShash.deployed().then(function(instance) {
      ipfsInstance = instance;

      return ipfsInstance.sendHash('5', {from: accounts[0]});
    }).then(function() {
      return ipfsInstance.ipfsHash.call();
    }).then(function(ipfsHash) {
      assert.equal(ipfsHash, 0xceebf77a833b30520287ddd9478ff51abbdffa30aa90a8d655dba0e8a79ce0c1, "The hash of value '5' was not stored.");
    });
  });

    it("...should store the hash of a reference", function() {
      return IPFShash.deployed().then(function(instance) {
        ipfsInstance = instance;
  
        return ipfsInstance.sendHash('ppdkyr2', {from: accounts[0]});
      }).then(function() {
        return ipfsInstance.ipfsHash.call();
      }).then(function(ipfsHash) {
        assert.equal(ipfsHash, 0xfd1d3fc671ae176dd9172559ac67efaed1561c8e855be6bbc0984d8392cb78c3, "The hash of the value '-2' was not stored.");
      });
  });
  it("...should store the hash of a file", function() {
    return IPFShash.deployed().then(function(instance) {
      ipfsInstance = instance;

      return ipfsInstance.sendHash('test.txt', {from: accounts[0]});
    }).then(function() {
      return ipfsInstance.ipfsHash.call();
    }).then(function(ipfsHash) {
      assert.equal(ipfsHash, 0xc98f5ad8b9c0d3d178431ee12624219389e01906855348f8bc78915b75168738, "The hash of the file was not stored.");
    });
});
it("...checking to make sure value doesn't change on new entry of same input", function() {
  return IPFShash.deployed().then(function(instance) {
    ipfsInstance = instance;

    return ipfsInstance.sendHash('test.txt', {from: accounts[0]});
  }).then(function() {
    return ipfsInstance.ipfsHash.call();
  }).then(function(ipfsHash) {
    assert.equal(ipfsHash, 0xc98f5ad8b9c0d3d178431ee12624219389e01906855348f8bc78915b75168738, "The hash has changed when it shouldn't have.");
  });
});

});