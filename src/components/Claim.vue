<template>
  <main class="main">
    <section class="main__banner main-banner">
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

    <section class="main__section main-section">
      <div class="main-section__container container">
        <div class="main-section__wrap">
          <h2 class="main-section__title section-title">Your Collection</h2>        
          <div class="row">
            <div
              v-for="(item, index) in mappedVrmItems"
              :key="index"
              class="col-md-3 col-sm-6 mb-4"
            >
              <div class="collection-card">
                <div class="collection-card__img">
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
</template>

<script>
import web3 from "../web3/web3";
import http from "../api/http";

export default {
  name: "ClaimPage",
  data() {
    return {
      vrmItems: [],
    };
  },

  methods: {
    a: function ()
    {
      console.log("sss");
      this.$forceUpdate();     
    },
    downloadVRM: function (tokenId) {
      console.log(web3.walletAddress);
      console.log(tokenId);
      http.requestVRMURL(web3.walletAddress,tokenId);
    },    
  },

  computed: {
    mappedVrmItems: function () {
      return this.vrmItems.map(function (item) {
        return {
          id: item.id,
          imgUrl: item.imgUrl,
          tokenId: item.tokenId,
        };
      });
    },
  },
  created() {
    this.vrmItems = window.vrmItems.slice();
  },

  beforeUnmount() {
    // window.removeEventListener("my-custom-event", this.a);
    // remove the watcher when the component is destroyed
  },

};
</script>

<style scoped>
@import "../../public/css/style.min.css";
</style>
