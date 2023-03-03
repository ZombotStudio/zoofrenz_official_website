<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__wrap">
        <a href="/" class="header__logo">
          <img src="img/logo.png" alt="Zoofenz" />
        </a>

        <div class="header__menu menu">
          <nav class="menu__body" data-menu>
            <span aria-hidden="true"></span>

            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Merch</a>
              </li>
              <li>
                <a href="#">More</a>
                <span class="menu__arrow"></span>
                <ul class="menu__sublist">
                  <li>
                    <a href="#">Why</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Buy</a>
                <span class="menu__arrow"></span>

                <ul class="menu__sublist">
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="menu__btn-box">
              <a v-on:click="connectWallet()" class="btn">Connect</a>
              <ul class="menu__soc soc">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon-discord"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
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
import web3 from "../web3/web3";

export default {
  name: "ClaimPage",
  methods: {
    handleConnectClick: function (num1, num2) {
      alert(num1 + num2);
    },
    connectWallet: function () {
      web3.connectWallet();
      // web3.handleConnectClick(1,2);
    },
  },
};
</script>

<style scoped>
@import "../../public/css/style.min.css";
</style>
