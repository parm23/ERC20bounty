import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ipfs from './ipfs'

class Home extends Component {
  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts
    this.handleSetButton = this.handleSetButton.bind(this)
    this.handleSetButtonIPFS = this.handleSetButtonIPFS.bind(this)
    this.handleSendTokens = this.handleSendTokens.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      storageAmount: 0,
      ipfsFile: '',
      ipfsUpload: 0,
      tokenRecipientAddress: '',
      tokenTransferAmount: 0
    }
  }

  handleCaptureFile() {
    event.preventDefault();
    
  }
    
  handleIPFSSubmit() {
    this.contracts.IPFShash.methods.sendHash(this.state.ipfsUpload).send()
  }


  handleSetButtonIPFS() {
    this.contracts.IPFShash.methods.sendHash(this.state.ipfsFile).send()
  }

  handleSendTokens() {
    this.contracts.NewToken.methods.transfer(this.state.tokenRecipientAddress, this.state.tokenTransferAmount).send()
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    // SimpleStorage Vars
    var storedData = this.props.drizzleStatus.initialized ? this.contracts.SimpleStorage.methods.storedData.data() : 'Loading...'
    
    // IPFShash Vars
    var ipfsHash = this.props.drizzleStatus.initialized ? this.contracts.IPFShash.methods.ipfsHash.data() : 'Loading...'
    // NewToken Vars
    var tokenSymbol = this.props.drizzleStatus.initialized ? this.contracts.NewToken.methods.symbol.data() : ''
    var tokenSupply = this.props.drizzleStatus.initialized ? this.contracts.NewToken.methods.totalSupply.data() : 'Loading...'
    var tokenBalance = this.props.drizzleStatus.initialized ? this.contracts.NewToken.methods.balanceOf.data(this.props.accounts[0]) : 'Loading...'

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Drizzle Examples</h1>
            <p>Here you'll find two example contract front-ends.</p>
          </div>

            <div className="pure-u-1-1">
            <h2>IPFS Storage</h2>
            <p><strong>IPFS Stored Value</strong>: {ipfsHash}</p>
            <form className="pure-form pure-form-stacked">
              <input name="ipfsFile" type="text" value={this.state.ipfsFile} onChange={this.handleInputChange} />
              <button className="pure-button" type="button" onClick={this.handleSetButtonIPFS}>Store Value of {this.state.ipfsFile}</button>
            </form>



          <div className="pure-u-1-1">
            <h2>NewToken</h2>
            <p><strong>Total Supply</strong>: {tokenSupply} {tokenSymbol}</p>
            <p><strong>My Balance</strong>: {tokenBalance}</p>
            <h3>Send Tokens</h3>
            <form className="pure-form pure-form-stacked">
              <input name="tokenRecipientAddress" type="text" value={this.state.tokenRecipientAddress} onChange={this.handleInputChange} placeholder="Address" />
              <input name="tokenTransferAmount" type="number" value={this.state.tokenTransferAmount} onChange={this.handleInputChange} placeholder="Amount" />
              <button className="pure-button" type="button" onClick={this.handleSendTokens}>Send Tokens to {this.state.tokenRecipientAddress}</button>
            </form>
          </div>
        </div>
        </div>
      </main>
    )
  }
}

Home.contextTypes = {
  drizzle: PropTypes.object
}

export default Home
