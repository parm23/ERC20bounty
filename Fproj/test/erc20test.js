let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised)
const { expect, assert } = chai

var NewToken = artifacts.require("NewToken");

contract('NewToken', async(accounts) => {
    it("approve test", async() => {
        let token = await NewToken.deployed();
    
        let approveResult = await token.approve.sendTransaction(accounts[1], 20, {from: accounts[0]});
        assert.isOk(approveResult);

      });
    });