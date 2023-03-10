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

const nftList = [];

window.vrmItems = JSON.parse(localStorage.getItem("vrmItems"));

var Web3Manager = {
  async connectWallet() {
    window.vrmItems = [];
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
    });

    this.wallets = await this.onboard.connectWallet();

    if (this.wallets.length > 0) {
      this.UpdateBlocknativeModalPos();
      
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
        nftList.push({ tokenId: key, editionId: nftIdPair[key] });
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

      nftList.push({ tokenId: tokenId, editionId: tokenId });
    }
  },
  ListTokenIdLIst() {
    window.vrmItems = [];
    nftList.forEach((element) => {
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
  UpdateBlocknativeModalPos() {
    const elem = document.getElementsByTagName("onboard-v2");
    if (!elem || !elem.item(0)) return;
    const childNodes = Array.from(elem.item(0).shadowRoot.childNodes);
    childNodes.forEach((childNode) => {
      if (childNode.nodeName === "DIV") {
        if (
          childNode.className.indexOf("container") >= 0 &&
          childNode.className.indexOf("svelte-") >= 0
        ) {
          childNode.style = "bottom: 1em; right: 0; width: auto;";
          window.setTimeout(() => {
            childNode.style = "bottom: 1em; right: 0; width: auto;";
          }, 100);
        }
      }
    });
  },
};

export default Web3Manager;
