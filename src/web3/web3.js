import { init, useOnboard } from "@web3-onboard/vue";

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

const MAINNET_RPC_URL =
  "https://mainnet.infura.io/v3/b5eaf001ec414c16a70fc397ffa2980d";
const ICON_URL =
  "https://zoofrenz-assets.s3.us-west-1.amazonaws.com/images/ThirdSpace_logo.png";
const LOGO_URL =
  "https://zoofrenz-assets.s3.us-west-1.amazonaws.com/images/ThirdSpace_logo.png";
const APP_DESCRIPTION = "ZooFrenz using Onboard";

const EVENT_WALLET_CONNECT_UPDATED = "wallet-connect-event";
const EVENT_NFT_LIST_UPDATED = "render-vrm-event";

let connectWallet, connectedWallet, alreadyConnectedWallets;

// let wallets,
// disconnectConnectedWallet;

var Web3Manager = {
  async initOnboard() {
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

    this.onboard = init({
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
        icon: ICON_URL,
        logo: LOGO_URL,
        description: APP_DESCRIPTION,
        recommendedInjectedWallets: [
          { name: "Coinbase", url: "https://wallet.coinbase.com/" },
          { name: "MetaMask", url: "https://metamask.io" },
        ],
      },
      connect: {
        showSidebar: true,
        disableClose: true,
      },
      accountCenter: {
        desktop: {
          // minimal: true,
          position: "bottomRight",
        },
        mobile: {
          position: "topRight",
          enabled: true,
          minimal: true,
        },
      },
    });

    ({
      // wallets,
      connectWallet,
      // disconnectConnectedWallet,
      connectedWallet,
      alreadyConnectedWallets,
    } = useOnboard());

    if (alreadyConnectedWallets.value[0] != null) {
      this.wallets = await connectWallet({
        autoSelect: {
          label: alreadyConnectedWallets.value[0],
          disableModals: true,
        },
      });

      await this.onWalletConnected();
    } else {
      window.vrmItems = [];
      window.nftList = [];

      const event = new Event(EVENT_NFT_LIST_UPDATED);
      window.dispatchEvent(event);

      window.walletConnected = false;
      const walletEvent = new Event(EVENT_WALLET_CONNECT_UPDATED);
      window.dispatchEvent(walletEvent);
    }
  },
  async connectWallet() {
    this.wallets = await connectWallet();

    if (connectedWallet.value.accounts.length > 0) {
      await this.onWalletConnected();

      var responseData = await http.requestSign(this.walletAddress);
      await this.signMessage(responseData);
    }
  },
  async onWalletConnected() {
    this.customOnBoardPosition();
    this.walletAddress = String(connectedWallet.value.accounts[0].address);

    window.walletConnected = true;
    const event = new Event(EVENT_WALLET_CONNECT_UPDATED);
    window.dispatchEvent(event);

    const ethersProvider = new ethers.providers.Web3Provider(
      connectedWallet.value.provider,
      "any"
    );

    this.signer = ethersProvider.getSigner();

    this.web3 = new Web3(connectedWallet.value.provider);

    AwakenedZoofrenz.init(this.web3);
    ZoofrenzFirstClassPass.init(this.web3);
    FrenshipToken.init(this.web3);
    ZooFrenzToken.init(this.web3);
    const state = this.onboard.state.select();
    state.subscribe((update) => {
      if (update.wallets.length == 0) {
        this.onWalletDisconnected();
      }
    });
    await this.listAllZoofrenzToken();
  },
  onWalletDisconnected() {
    window.walletConnected = false;

    const event = new Event("wallet-connect-event");
    window.dispatchEvent(event);
    window.vrmItems = [];

    const event2 = new Event(EVENT_NFT_LIST_UPDATED);
    window.dispatchEvent(event2);
  },
  async listAllZoofrenzToken() {
    window.nftList = [];
    await this.listAwakenedZoofrenzToken();
    await this.listZoofrenzToken();
    window.listNFTed = true;
    this.listTokenIdLIst();
  },

  async listAwakenedZoofrenzToken() {
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

  async listZoofrenzToken() {
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
  listTokenIdLIst() {
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

      const event = new Event(EVENT_NFT_LIST_UPDATED);
      window.dispatchEvent(event);
    });
  },
  async signMessage(mes) {
    const signature = await this.signer.signMessage(mes);

    await http.verifySignedMessage(this.walletAddress, signature);
  },
  customOnBoardPosition() {
    const elem = document.getElementsByTagName("onboard-v2");
    if (!elem || !elem.item(0)) return;
    const childNodes = Array.from(elem.item(0).shadowRoot.childNodes);
    childNodes.forEach((childNode) => {
      if (childNode.nodeName === "DIV") {
        if (
          childNode.className.indexOf("container") >= 0 &&
          childNode.className.indexOf("svelte-") >= 0
        ) {
          childNode.style.zIndex = "100";
        }
      }
    });
  },
};

export default Web3Manager;
