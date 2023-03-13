import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import ledgerModule from "@web3-onboard/ledger";

import { ethers } from "ethers";
import Web3 from "web3";

import { AwakenedZoofrenz } from "./AwakenedZoofrenz";
import { ZoofrenzFirstClassPass } from "./ZoofrenzFirstClassPass";
import { FrenshipToken } from "./FrenshipToken";
import { ZooFrenzToken } from "./ZooFrenzToken";

import http from "../api/http";

window.nftList = [];
window.vrmItems = JSON.parse(localStorage.getItem("vrmItems"));

var Web3Manager = {
  async connectWallet() {
    window.vrmItems = [];
    window.nftList = [];
    localStorage.setItem("vrmItems", JSON.stringify(window.vrmItems));
    const event = new Event("render-vrm-event");
    window.dispatchEvent(event);

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
      connect: {
        showSidebar: true,
        disableClose: true,
        // autoConnectLastWallet: true,
        // disableClose: true, // defaults to false
        // autoConnectLastWallet: true, // defaults to false
      },
      accountCenter: {
        desktop: {
          position: 'bottomRight',
          // enabled: true,
          // minimal: true
        },
        mobile: {
          position: 'topRight',
          enabled: true,
          minimal: true
        }
      },
    });

    this.wallets = await this.onboard.connectWallet();

    if (this.wallets.length > 0) {
      // window.localStorage.setItem('walletConnectionInfo', JSON.stringify(walletConnectionInfo));

      window.walletConnected = true;

      const event = new Event("wallet-connect-event");
      window.dispatchEvent(event);
      
      const ethersProvider = new ethers.providers.Web3Provider(
        this.wallets[0].provider,
        "any"
      );

      this.signer = ethersProvider.getSigner();

      this.web3 = new Web3(this.wallets[0].provider);

      AwakenedZoofrenz.init(this.web3);
      ZoofrenzFirstClassPass.init(this.web3);
      FrenshipToken.init(this.web3);
      ZooFrenzToken.init(this.web3);

      this.walletAddress = String(this.wallets[0].accounts[0].address);

      var responseData = await http.requestSign(this.walletAddress);

      await this.SignMessage(responseData);

      await this.ListAllZoofrenzToken();

      this.ListTokenIdLIst();
    }

    const state = this.onboard.state.select();
    state.subscribe((update) => {
      if (update.wallets.length == 0) {
        window.walletConnected = false;

        const event = new Event("wallet-connect-event");
        window.dispatchEvent(event);
        window.vrmItems = [];
        window.nftList = [];
        localStorage.setItem("vrmItems", JSON.stringify(window.vrmItems));
        const event2 = new Event("render-vrm-event");
        window.dispatchEvent(event2);
      }
    });
  },
  async ListAllZoofrenzToken() {
    await this.ListAwakenedZoofrenzToken();
    await this.ListZoofrenzToken();
  },

  async ListAwakenedZoofrenzToken() {
    try {
      const nfts = await AwakenedZoofrenz.tokensOfOwner(this.walletAddress);
      const tokendIdString = String(nfts);
      const nftIdPair = await http.getEditionIdList(tokendIdString);

      for (let key in nftIdPair) {
        window.nftList.push({ tokenId: key, editionId: nftIdPair[key] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  async ListZoofrenzToken() {
    const balanceOfZoofrenzTokenPromise = ZooFrenzToken.balanceOf(
      this.walletAddress
    );
    const bal = await balanceOfZoofrenzTokenPromise;

    for (var i = 0; i < bal; i++) {
      const ZoofrenzTokenTokenOfOwnerByIndexPromise =
        ZooFrenzToken.tokenOfOwnerByIndex(this.walletAddress, i);
      const token = await ZoofrenzTokenTokenOfOwnerByIndexPromise;
      const tokenId = String(token);

      window.nftList.push({ tokenId: tokenId, editionId: tokenId });
    }
  },
  ListTokenIdLIst() {
    window.vrmItems = [];

    window.nftList.forEach((element) => {
      window.vrmItems.push({
        id: "#" + element.editionId,
        imgUrl:
          "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
          element.editionId +
          ".png",
        tokenId: element.tokenId,
        editionId: element.editionId,
      });

      const event = new Event("render-vrm-event");
      window.dispatchEvent(event);
    });

    localStorage.setItem("vrmItems", JSON.stringify(window.vrmItems));
  },
  async SignMessage(mes) {
    try {
      const signature = await this.signer.signMessage(mes);

      await http.verifySignedMessage(this.walletAddress, signature);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  },  
  async WalletCheck() {
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
      connect: {
        // disableClose: true, // defaults to false
        autoConnectLastWallet: true, // defaults to false
      },
      accountCenter: {
        desktop: {
          position: 'bottomRight',
          // enabled: true,
          // minimal: true
        },
        mobile: {
          position: 'topRight',
          enabled: true,
          minimal: true
        }
      },
    });
    console.log('ww');    
    this.wallets = await this.onboard.connectWallet();
    console.log(this.wallets);
    console.log('done');  

    // this.UpdateBlocknativeModalPos();
  },
};

export default Web3Manager;
