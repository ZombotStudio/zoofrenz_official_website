<template>
  <header class="header">
  <div class="header__container container">
    <div class="header__wrap">
      <router-link to="/" class="header__logo">
        <img src="img/logo.png" alt="Zoofenz" />
      </router-link>

      <div class="header__menu menu">
        <nav class="menu__body" data-menu>
          <span aria-hidden="true"></span>
          <ul>
            <li>
              <router-link to="/Features">Features</router-link>
            </li>
            <li>
              <router-link to="/Merch">Merch</router-link>
            </li>
            <li>
              <a href="#">More</a>
              <span class="menu__arrow"></span>

              <ul class="menu__sublist">
                <li>
                  <router-link to="/Why">Why</router-link>
                </li>
                <li>
                  <router-link to="/Team">Team</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/Claim">3D Claim</router-link>
            </li>
          </ul>

          <div class="menu__btn-box">
            <a v-on:click="connectWallet()" class="btn">Connect</a>

            <ul class="menu__soc soc">
              <li>
                <a
                  href="https://twitter.com/zoofrenzNFT"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-twitter"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zoofrenz.eth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-instagram"
                ></a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/zoofrenznft"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-discord"
                ></a>
              </li>
              <li>
                <a
                  href="https://opensea.io/collection/zoofrenz-apefrenz-2-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon-ship"
                ></a>
              </li>
            </ul>
          </div>
        </nav>

        <button
          class="menu__btn"
          data-burger
          aria-label="open menu"
          title="menu"
        >
          <span aria-hidden></span>
        </button>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import Web3 from "../web3/web3";

export default {
  name: "ClaimView",
  methods: {
    handleConnectClick: function (num1, num2) {
      alert(num1 + num2);
    },
    connectWallet: function () {
      Web3.connectWallet();
      // web3.handleConnectClick(1,2);
    },
    ListAllZoofrenzToken: function () {
      Web3.ListAllZoofrenzToken();
    },
    BalanceOfZoofrenzToken: function () {
      // alert(2);
      Web3.RequestSign();
      // Web3.ListTokenIdLIst();
      // 
      // Web3.ListAllZoofrenzToken();
      // Web3.ZoofrenzTokenTokenOfOwnerByIndex();
    },
    
  },
};
</script>

<style scoped>
@import "../../public/css/style.min.css";
</style>
