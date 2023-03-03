import Onboard from "@web3-onboard/core";

import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import ledgerModule from "@web3-onboard/ledger";

// import { ethers } from "ethers";
// import Web3 from "web3";
// // import { init } from '@web3-onboard/vue'
// import { AwakenedZoofrenz } from "./AwakenedZoofrenz";
// import { ZoofrenzFirstClassPass } from "./ZoofrenzFirstClassPass";
// import { FrenshipToken } from "./FrenshipToken";

var Web3 = {
  async connectWallet() {
    const MAINNET_RPC_URL =
      "https://mainnet.infura.io/v3/b5eaf001ec414c16a70fc397ffa2980d";

    const injected = injectedModule();

    const walletConnect = walletConnectModule({
      bridge: "https://f.bridge.walletconnect.org",
      qrcodeModalOptions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
      connectFirstChainId: true,
    });

    const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });

    const ledger = ledgerModule();

    this.onboard = Onboard({
      wallets: [injected, walletConnect, coinbaseWalletSdk, ledger],
      chains: [
        {
          id: "0x1",
          token: "ETH",
          label: "Ethereum Mainnet",
          rpcUrl: MAINNET_RPC_URL,
        },
      ],
      appMetadata: {
        name: "ZooFrenz",
        icon: "https://zoofrenz-assets.s3.us-west-1.amazonaws.com/images/ThirdSpace_logo.png",
        logo: "https://zoofrenz-assets.s3.us-west-1.amazonaws.com/images/ThirdSpace_logo.png",
        description: "ZooFrenz using Onboard",
        recommendedInjectedWallets: [
          { name: "Coinbase", url: "https://wallet.coinbase.com/" },
          { name: "MetaMask", url: "https://metamask.io" },
        ],
      },
    });

    this.wallets = await this.onboard.connectWallet();

    if (this.wallets.length > 0) {
      console.log(String(this.wallets[0].accounts[0].address));
    }
  },  
};

export default Web3;
