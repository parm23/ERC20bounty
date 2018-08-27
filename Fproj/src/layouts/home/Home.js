import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logoproj from '../../logoproj.png'
import ipfs from '../../ipfs'
import ipfsUploader from './ipfsUploader'

class Home extends Component {

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logoproj} alt="drizzle-logo" />
            <h1>Secure Token Share Featuring Zeppelin</h1>
            <p>Peer to Peer Safe Token Transfers</p>

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Active Ganache Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Hashing Calculator Ensured by Smart Contract</h2>
            <p>Type in any data to be saved as a SHA3 hash. A core feature of blockchain applications is storing the hash of various data sets or inputs. Enter any value to store the hash:</p>
            <p><strong>Stored Value</strong>: <ContractData contract="IPFShash" method="ipfsHash" /></p>
            <ContractForm contract="IPFShash" method="sendHash" labels={['update']} />

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Reward Token Engine: Zeppelin ERC20 Token</h2>
            <p>Peer 2 Peer token transfer. Enter the address of the destination account to send Reward Token to:</p>
            <p><strong>Total Supply</strong>: <ContractData contract="NewToken" method="totalSupply" methodArgs={[{from: this.props.accounts[0]}]} /> <ContractData contract="NewToken" method="symbol" hideIndicator /></p>
            <p><strong>My Balance</strong>: <ContractData contract="NewToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h3>Send Tokens</h3>
            <ContractForm contract="NewToken" method="transfer" labels={['To Address', 'Amount to Send']} />

            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
