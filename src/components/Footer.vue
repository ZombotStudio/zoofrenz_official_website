<template>     
  <footer class="footer">
  <div class="footer__container container">
    <div class="footer__wrap">
      <div class="footer__row">
        <router-link to="/" class="footer__logo">
          <img src="img/logo.png" alt="Zoofrenz" />
        </router-link>

        <nav class="footer__nav">
          <ul class="footer__menu">
            <li>
              <router-link to="/Features">Features</router-link>
            </li>
            <li>
              <router-link to="/Merch">Merch</router-link>
            </li>
          </ul>
        </nav>

        <ul class="footer__soc soc">
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
    </div>
  </div>
</footer>

</template>
  
<script>
export default {
    name:'ClaimPage',
};

</script>
  
<style scoped>
@import '../../public/css/style.min.css'
</style>
  