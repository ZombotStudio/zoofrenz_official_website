import CryptoJS from "crypto-js";
import axios from "axios";
// import { Buffer } from 'buffer';

// const {
//   RequestSignedMessageParameters,
//   RequestSignedMessageResponse,
// } = require("../proto/RequestSignedMessage_pb");

// const proto = require("../proto/RequestSignedMessage_pb");
// const {
//   VerifySignedMessageParameters,
//   VerifySignedMessageResponse,
// } = require("../proto/VerifySignedMessage_pb");
// const {
//   VrmUrlaPrameters,
//   // VrmUrlResponse,
// } = require("../proto/VrmUrl_pb");

const payload = {
  iss: "Zoofrenz",
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // expires in 1 day
  client_version: "0.0.3",
  client_bundle_id: "com.zoofrenz.ThirdSpace",
};
const secretKey = "46d36f16692f1b3b6f1165a4478c4b90";

// Encode the JWT header and payload using base64
const header = btoa(JSON.stringify({ typ: "JWT", alg: "HS256" }));
const encodedPayload = btoa(JSON.stringify(payload));

// Concatenate the encoded JWT header and payload with a period separator
const encodedToken = `${header}.${encodedPayload}`;

// Sign the encoded JWT using the secret key and the HMAC-SHA256 algorithm
const signature = CryptoJS.HmacSHA256(encodedToken, secretKey);
const signedToken = `${encodedToken}.${CryptoJS.enc.Base64url.stringify(
  signature
)}`;

var access_token = "";
var http = {
  
  async requestVRMURL(walletAddress, tokenId) {

    const requestBody = {
      address: walletAddress,
      token_id:tokenId,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "ZF-Client-Token": signedToken,
      "ZF-Access-Token": access_token,
    };
    try {
      const response = await axios.post(   
        "https://dev-third-space-api.zoofrenz.com:30001/api/v1/auth/vrm/get",
        requestBody,
        { headers }
      );
      console.log("mes = " ,response.data);
      open(response.data.url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getEditionIdList(tokenIdList)
  {
    try {
      const response = await axios.get(     
        "https://dev-third-space-api.zoofrenz.com:30010/api/v1/revealedId/get?tokenId="+tokenIdList,        
      );
      console.log("mes = " ,response.data);    
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async verifySignedMessage(walletAddress, message) {
    const requestBody = {
      address: walletAddress,
      message:message,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "ZF-Client-Token": signedToken,
      "ZF-Access-Token": "",
    };
    try {
      const response = await axios.post(
        "https://dev-third-space-api.zoofrenz.com:30001/api/v1/auth/web3/sign/message/verify",
        requestBody,
        { headers }
      );
      console.log("mes = " ,response.data);
      access_token = response.data.access_token;
      return response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  },
  // 54.169.12.15
  async requestSign(walletAddress) {
    const requestBody = {
      address: walletAddress,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "ZF-Client-Token": signedToken,
      "ZF-Access-Token": "",
    };
    try {
      const response = await axios.post(
        "https://dev-third-space-api.zoofrenz.com:30001/api/v1/auth/web3/sign/message/new",
        requestBody,
        { headers }
      );
      console.log("mes = " ,response.data.message);
      return response.data.message;
    } catch (error) {
      console.error(error);
    }   
  },

  async httpRequest(url, bytes) {
    try {
      const response = await axios.post(url, bytes, {
        headers: {
          "Content-Type": "application/x-protobuf",
          "ZF-Client-Token": signedToken,
          "ZF-Access-Token": "",
        },
        responseType: "arraybuffer",
      });
      console.log("success1");
      return response;
    } catch (error) {
      console.error("error");
      console.log(error);
      console.error("Request failed");
      throw error;
    }
  },

  async httpRequest2(url, bytes, accessToken) {
    console.log(accessToken);
    try {
      const response = await axios.post(url, bytes, {
        headers: {
          "Content-Type": "application/x-protobuf",
          "ZF-Client-Token": signedToken,
          "ZF-Access-Token": accessToken,
        },
      });
      console.log("success");
      return response;
    } catch (error) {
      console.error("error");
      console.log(error);
      console.error("Request failed");
      throw error;
    }
  },
};

export default http;
