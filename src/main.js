import { createApp } from 'vue'
import App from './App.vue'

import { init } from '@web3-onboard/vue'
import injectedModule from '@web3-onboard/injected-wallets'
// import Onboard from '@web3-onboard/core'

import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import ledgerModule from '@web3-onboard/ledger'

// import { ethers } from 'ethers'
import { ethers } from "ethers";
import Web3 from 'web3';
const injected = injectedModule()
const web3Onboard = init({
    wallets: [injected],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet'
      }
    ]
  })

createApp(App).mount('#app')

window.web3Onboard = web3Onboard
window.ethers = ethers
window.Web3 = Web3

// //wallet
// window.injectedModule = injectedModule
window.walletConnectModule = walletConnectModule
window.coinbaseWalletModule = coinbaseWalletModule
window.ledgerModule = ledgerModule