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

// window.vrmItems = [
//   {
//     id: "#5095",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "5095" +
//       ".png",
//     tokenId: "8695",
//     editionId: "5095",
//   },
//   {
//     id: "#1",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "1" +
//       ".png",
//     tokenId: "1",
//     editionId: "1",
//   },
//   {
//     id: "#5095",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "5095" +
//       ".png",
//     tokenId: "8695",
//     editionId: "5095",
//   },
//   {
//     id: "#1",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "1" +
//       ".png",
//     tokenId: "1",
//     editionId: "1",
//   },
//   {
//     id: "#5095",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "5095" +
//       ".png",
//     tokenId: "8695",
//     editionId: "5095",
//   },
//   {
//     id: "#1",
//     imgUrl:
//       "https://zoofrenz-assets-singapore.s3.ap-southeast-1.amazonaws.com/nft-images-256x256/" +
//       "1" +
//       ".png",
//     tokenId: "1",
//     editionId: "1",
//   },
// ];
window.vrmItems = [];

var Web3Manager = {
  async connectWallet() {
    window.vrmItems = [];
    this.vrmItems = window.vrmItems.slice();
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
    console.log("Done logging");
  },

  async ListAwakenedZoofrenzToken() {
    try {
      const nfts = await AwakenedZoofrenz.tokensOfOwner(this.walletAddress);
      const tokendIdString = String(nfts);
      const nftIdPair = await http.getEditionIdList(tokendIdString);

      for (let key in nftIdPair) {
        nftList.push({ tokenId: key, editionId: nftIdPair[key] });
      }

      // for (var i = 0; i < tokenIdArray.length; i++) {
      //   nftList.push({ tokenId: tokenIdArray[i], editionId:editionIdArray[i] });
      // }

      console.log("Done ListAwakenedZoofrenzToken");
    } catch (error) {
      console.error(error);
    }
  },

  async ListZoofrenzToken() {
    const balanceOfZoofrenzTokenPromise = ZooFrenzToken.balanceOf(
      this.walletAddress
    );
    const bal = await balanceOfZoofrenzTokenPromise;
    const msg = String(bal);
    console.log(msg);

    for (var i = 0; i < bal; i++) {
      const ZoofrenzTokenTokenOfOwnerByIndexPromise =
        ZooFrenzToken.tokenOfOwnerByIndex(this.walletAddress, i);
      const token = await ZoofrenzTokenTokenOfOwnerByIndexPromise;
      const tokenId = String(token);

      nftList.push({ tokenId: tokenId, editionId: tokenId }); 
    }
    
  },
  ListTokenIdLIst() {
    console.log("ListTokenIdLIst");

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
    });
  
    console.log(window.vrmItems);
    console.log("reloadPage");
    // const event = new Event("my-custom-event");
    // window.dispatchEvent(event);
    
  },
  async SignMessage(mes) {
    try {
      const signature = await this.signer.signMessage(mes);
      console.log("accessToken");
      console.log(signature);

      await http.verifySignedMessage(this.walletAddress, signature);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  },
};

export default Web3Manager;
