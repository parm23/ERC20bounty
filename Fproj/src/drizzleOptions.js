import ComplexStorage from './../build/contracts/ComplexStorage.json'
import NewToken from './../build/contracts/NewToken.json'
import IPFShash from './../build/contracts/IPFShash.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    NewToken,
    IPFShash,
  ],
  events: {
    IPFShash: ['HashSet']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions