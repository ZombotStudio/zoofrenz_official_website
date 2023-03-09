<template>
    <main class="main">
        <section class="merch">
          <div class="merch__container container">
            <div class="merch__wrap">
              <h1 class="merch__title section-title section-title--green">
                Official Merch Line
              </h1>

              <div class="merch__slider mb-5">
                <div class="swiper swiper-merch">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-01.jpg" alt="" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-03.jpg" alt="" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-01.jpg" alt="" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="merch-card">
                        <img src="img/merch/merch-03.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-button-prev swiper-merch-button-prev"></div>
                <div class="swiper-button-next swiper-merch-button-next"></div>
              </div>
              <div class="text-center card--brown">
                <a href="https://merch.zoofrenz.com" class="card__btn card-btn" target="_blank">
                  Show me the merch! →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
</template>

<script>

export default  {
  name:  'MerchView',
  mounted() {
        document.body.className = 'merch-page pc webp';
    }
};
</script>