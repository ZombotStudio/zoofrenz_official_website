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

const tokenIdList = [];

var Web3Manager = {
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
      
      this.SignMessage(responseData);
      // this.walletAddress = "0xc9c76085b28afe42f1670b2E512FCA8aC6Ad91c2";
    }
  },
  ListAllZoofrenzToken() {
    this.ListAwakenedZoofrenzToken();
    this.ListZoofrenzToken();
  },

  ListAwakenedZoofrenzToken() {
    // const listNFTsPromise = AwakenedZoofrenz.tokensOfOwner(this.walletAddress);

    const listNFTsPromise = AwakenedZoofrenz.tokensOfOwner(
      "0x43a2e4bB618766FFd175330E0De2927D29e86be1"
    );

    listNFTsPromise.then((nfts) => {
      const nftsString = String(nfts);
      const nftArray = nftsString.split(",");
      nftArray.forEach((element) => {
        tokenIdList.push(element);
      });
      console.log("Done ListAwakenedZoofrenzToken");
    });
  },
  ListZoofrenzToken() {
    const balanceOfZoofrenzTokenPromise = ZooFrenzToken.balanceOf(
      this.walletAddress
    );

    balanceOfZoofrenzTokenPromise.then((bal) => {
      const msg = String(bal);
      console.log(msg);

      for (var i = 0; i < bal; i++) {
        const ZoofrenzTokenTokenOfOwnerByIndexPromise =
          ZooFrenzToken.tokenOfOwnerByIndex(this.walletAddress, i);

        ZoofrenzTokenTokenOfOwnerByIndexPromise.then((bal) => {
          const msg = String(bal);
          // console.log(msg);
          tokenIdList.push(msg);
          console.log("done " + i);
        });
      }
    });
  },
  ListTokenIdLIst() {
    tokenIdList.forEach((element) => {
      console.log(element);
    });
  },  
  SignMessage(mes) {
    var signaturePromise = this.signer.signMessage(mes);

    signaturePromise.then(
      (msg) => {
        console.log("accesstoken");        
        console.log(msg);

        http.verifySignedMessage(this.walletAddress,msg);
      },
      (msg) => {
        console.log("error");
        console.log(msg);

        // if (onMessageSigned) {
        //   Module["dynCall_vii"](onMessageSigned, false, msg);
        // }
      }
    );
  },
};

export default Web3Manager;
