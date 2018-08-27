let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised)
const { expect, assert } = chai

var LaunchERC721 = artifacts.require("LaunchERC721");

contract('Testing ERC721 contract', function(accounts) {

    let token;
    let token2;
    const name = "Black Panther";
    const name2 = "Black Mirror";
    const symbol = "BPan";
    const symbol2 = "BMir";

    const account1 = accounts[1]
    const tokenId1 = 1111;
    const tokenUri1 = "This is data for the token 1"; // Does not have to be unique

    const account2 = accounts[2]
    const tokenId2 = 2222;
    const tokenUri2 = "This is data for the token 2"; // Does not have to be unique

    const account3 = accounts[3]
    const tokenId3 = 3333;
    const tokenUri3 = "This is data for the token 3"; // Does not have to be unique


    it(' should be able to deploy and mint my ERC721 token', async () => {
        token = await LaunchERC721.new(name, symbol)
        await token.mintUniqueTokenTo(account1, tokenId1, tokenUri1, {from: accounts[0]})

        expect(await token.symbol()).to.equal(symbol)
        expect(await token.name()).to.equal(name)
    })


    it(' should allow creation of multiple unique tokens and manage ownership', async () => {
        const additionalToken = await token.mintUniqueTokenTo(account2, tokenId2, tokenUri2, {from: accounts[0]})
        expect(Number(await token.totalSupply())).to.equal(2)

        expect(await token.exists(tokenId1)).to.be.true //checking to see if token 1 exists
        expect(await token.exists(tokenId2)).to.be.true //checking to see if token 2 exists
        expect(await token.exists(9999)).to.be.false // Making sure a random token doesn't exist

        expect(await token.ownerOf(tokenId1)).to.equal(account1)
        expect(await token.ownerOf(tokenId2)).to.equal(account2)
    })

    it(' should allow for a safe transfers', async () => {
        await token.safeTransferFrom(account2, account3, tokenId2, {from: accounts[2]})
        expect(await token.ownerOf(tokenId2)).to.equal(account3)
    })

    it(' should allow safe return transfers', async () => {
        await token.safeTransferFrom(account3, account2, tokenId2, {from: accounts[3]})
        expect(await token.ownerOf(tokenId2)).to.equal(account2)
    })

    it(' checking for ability to create a new erc721 and mint after initial', async () => {
        token2 = await LaunchERC721.new(name2, symbol2)
        await token2.mintUniqueTokenTo(account3, tokenId3, tokenUri3, {from: accounts[3]})

        expect(await token2.symbol()).to.equal(symbol2)
        expect(await token2.name()).to.equal(name2)
    })
})