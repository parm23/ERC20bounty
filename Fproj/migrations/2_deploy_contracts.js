var NewToken = artifacts.require("NewToken");
var IPFShash = artifacts.require("IPFShash");
var LaunchERC721 = artifacts.require("LaunchERC721");

module.exports = function(deployer) {
  deployer.deploy(NewToken);
  deployer.deploy(IPFShash);
  deployer.deploy(LaunchERC721, "Best Token", "BT");
};
