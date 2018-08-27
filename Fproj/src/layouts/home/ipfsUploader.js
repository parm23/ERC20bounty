import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ipfs from '../../ipfs'

class ipfsUploader extends Component {
  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts
    this.handleSetButtonIPFS = this.handleSetButtonIPFS.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      
      ipfsFile: '',

      tokenTransferAmount: 0
    }
  }

  handleCaptureFile() {
    
    
  }
    
  handleIPFSSubmit() {
    this.contracts.IPFShash.methods.sendHash(this.state.ipfsUpload).send()
  }


  handleSetButtonIPFS() {
    this.contracts.IPFShash.methods.sendHash(this.state.ipfsFile).send()
  }

 

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    
    // IPFShash Vars
    var ipfsHash = this.props.drizzleStatus.initialized ? this.contracts.IPFShash.methods.ipfsHash.data() : 'Loading...'
    // NewToken Vars

    return(
      <main className="container">
      <div>
      <input type="file" />
        </div>
      </main>
    )
  }
}
ipfsUploader.contextTypes = {
  drizzle: PropTypes.object
}

export default ipfsUploader
