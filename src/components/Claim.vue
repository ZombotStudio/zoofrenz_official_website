<template>
  <main class="main">
    <section v-if="!listNFTed" class="main__banner main-banner">
      <div class="main-banner__container container container--sm">
        <div class="main-banner__wrap">
          <div class="main-banner__card card">
            <h1 class="card__title"><span>HOW</span> TO CLAIM 3D MODELS</h1>

            <div class="card__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-else class="main__section main-section">
      <div class="main-section__container container">
        <div class="main-section__wrap">
          <h2 class="main-section__title section-title">Your Collection</h2>
          <div class="row">
            <div
              v-for="(item, index) in vrmItems"
              :key="index"
              class="col-md-3 col-sm-6 mb-4"
            >
              <div class="collection-card">
                <div class="collection-card__vrm">
                  <img :src="item.imgUrl" alt="" />
                </div>

                <div class="collection-card__text">
                  <h3 class="collection-card__title">{{ item.id }}</h3>
                  <a
                    v-on:click="downloadVRM(item.tokenId)"
                    class="collection-card__btn"
                  >
                    DOWNLOAD VRM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <verifying :show="showVerifying" />
</template>

<script>
import web3 from "../web3/web3";
import http from "../api/http";
import verifying from "./Verifying.vue";

export default {
  name: "ClaimPage",
  components: { verifying },
  methods: {
    updateListNFTed: function () {
      this.listNFTed = window.walletConnected;
    },
    renderVRM: function () {
      this.vrmItems = window.vrmItems;
    },

    async downloadVRM (tokenId) {
      this.showVerifying = true;
      await http.requestVRMURL(web3.walletAddress, tokenId);
      this.showVerifying = false;
    },
  },

  data() {
    return {
      showVerifying: false,
      vrmItems: window.vrmItems,
      listNFTed: window.walletConnected,
    };
  },
  mounted() {
    this.renderVRM();
    window.addEventListener("wallet-connect-event", this.updateListNFTed);
    window.addEventListener("render-vrm-event", this.renderVRM);

    document.body.className = "pc webp";
  },
  beforeUnmount() {
    window.removeEventListener("wallet-connect-event", this.updateListNFTed);
    window.removeEventListener("render-vrm-event", this.renderVRM);
  },
};
</script>

<style scoped>
@import "../../public/css/style.min.css";
</style>
