# ERC20bounty

![Screenshot](ERC20pic.jpg)


A Simple ERC-20 Token Transfer Example with Hashing Contract Storage and ERC-721 Unique Token Launch



ERC-20 and ERC-721 tokens both very popular these days among the launches of ICO's and the more recent fascination with marketplaces such as cryptokitties. The ERC-721 standard has gone through a couple iterations and is stabilizing rather quickly, so we are most likely going to see adoption continuing to increase in the present and future. The basic premise of these non-fungible tokens is that each token is unique and therefore cannot be exchanged on a 1:1 basis like an ERC20 token may be. There are many use cases where a unique tangible or digital asset may represented by these ERC-721 tokens and we are really starting to see this pick up for various enterprise blockchain projects

Purpose of this project
This project will create an ICO of 100,000 ERC-20 tokens using the EthPm OpenZeppelin implementation of the ERC-20 standard that can be freely exchaged from the owner to any peer of his/her coice as a bounty. There are a couple other added features included in this project, the list of actions possible are:

1. ERC-20 token bounty exchange: See web app (localhost:3000) to send tokens and view them in Metamask wallet
2. Built-in hashing utilizing smart contract storage of user input, demonstrating the fundamentals of how more complex, larger data elements are often stored/referenced on-chain
3. ERC-721 unique token creation and distribution (see smart contract and test cases for more information)

![Screenshot](ERC721pic.jpg)


Setup the project
Make sure that you have node, npm and truffle installed


Install Ganache and make sure it is running on 8545

Compile and Migrate

truffle compile
truffle migrate


npm init
Install zeppelin dependency

npm install zeppelin-solidity


npm install chai --save-dev
npm install chai-as-promised --save-dev
npm install babel-preset-es2015 --save-dev
npm install babel-register --save-dev
npm install babel-polyfill --save-dev


truffle test
![Screenshot](testresults.jpg)





