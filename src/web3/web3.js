import Onboard from "@web3-onboard/core";

import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import ledgerModule from "@web3-onboard/ledger";

import { ethers } from "ethers";
import Web3 from "web3";
// // import { init } from '@web3-onboard/vue'
import { AwakenedZoofrenz } from "./AwakenedZoofrenz";
import { ZoofrenzFirstClassPass } from "./ZoofrenzFirstClassPass";
import { FrenshipToken } from "./FrenshipToken";
import { ZooFrenzToken } from "./ZooFrenzToken";
import CryptoJS from "crypto-js";
// import Vue from 'vue';

// import { HMACSHA256Algorithm } from 'jwt-builder/lib/algorithms';
// import jwt from 'jwt-decode';

// import { VueJwt } from 'vuejs-jwt';

// // This is the payload you want to encode into a JWT
// const payload = {
//   user_id: 1234,
//   username: 'johndoe',
//   role: 'admin'
// };

// // This is the secret key used to sign the JWT
// const secret = 'mysecretkey';

// // Generate the JWT
// const token = jwt.sign(payload, secret, { expiresIn: '1h' });

// console.log('Generated JWT:', token);

const {
  RequestSignedMessageParameters,
} = require("../proto/RequestSignedMessage_pb");

// const proto = require('../proto/RequestSignedMessage_pb');
// import "proto";
import axios from "axios";
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
  RequestSign() {
    console.log("sign Message2");

    const params = new RequestSignedMessageParameters();
    params.setAddress(this.walletAddress.toString("base64"));
    console.log(params);

    const bytes = params.serializeBinary();

    // const jwt = new VueJwt();
    // const _secret = '46d36f16692f1b3b6f1165a4478c4b90';
    // const token = jwt.sign({
    //   iss: 'Zoofrenz',
    //   iat: Math.floor(Date.now() / 1000),
    //   exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // expires in 1 day
    //   client_version: "0.0.0",
    //   client_bundle_id: "",
    // }, _secret, {  });
    // console.log(token)

    const payload = {
      iss: "Zoofrenz",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // expires in 1 day
      client_version: "0.0.3",
      client_bundle_id: "com.zoofrenz.ThirdSpace",
    };

    // Set the secret key used to sign the JWT
    const secretKey = '46d36f16692f1b3b6f1165a4478c4b90';

    // Encode the JWT header and payload using base64
    const header = btoa(JSON.stringify({  typ: "JWT" ,alg: "HS256"}));
    const encodedPayload = btoa(JSON.stringify(payload));

    // Concatenate the encoded JWT header and payload with a period separator
    const encodedToken = `${header}.${encodedPayload}`;

    // Sign the encoded JWT using the secret key and the HMAC-SHA256 algorithm
    const signature = CryptoJS.HmacSHA256(encodedToken, secretKey);
    const signedToken = `${encodedToken}.${CryptoJS.enc.Base64url.stringify(
      signature
    )}`;

    // Output the signed JWT
    console.log("token = ");
    console.log(signedToken);

    // Use axios to make the HTTP request
    axios
      .post(
        "http://192.168.0.6:30001/api/v1/auth/web3/sign/message/new",
        bytes,
        {
          headers: {
            "Content-Type": "application/x-protobuf",
            "ZF-Client-Token":signedToken,
          },
        }
      )
      .then((response) => {
        console.log("success");
        console.log(response);
        // Handle successful response
        // const responseBytes = response.data;
        // const responseMessage = RequestSignedMessageResponse.deserializeBinary(responseBytes);
        // console.log("responseMessage");
        // console.log(responseMessage);
      })
      .catch((error) => {
        // Handle error response
        console.error("error");
        console.log(error);
        console.error("Request failed");
      });
  },
};

export default Web3Manager;
