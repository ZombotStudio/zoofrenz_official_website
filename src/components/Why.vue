<template>
    <main class="main">
        <section class="why-banner">
          <picture>
            <source
              srcset="img/why/why-bg-mob.png"
              media="(max-width: 992px)"
            />
            <img src="img/why/why-bg.png" alt="" class="why-banner__bg" />
          </picture>

          <div class="why-banner__container container">
            <div class="why-banner__wrap">
              <h1 class="why-banner__title section-title">Why?</h1>

              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="why-banner__card card card--brown">
                    <div class="card__quote"></div>

                    <div class="card__body">
                      <p>
                        Good question. When we stumbled into Web3, we found a
                        million different people claiming to know the future of
                        the internet and social engagement.
                      </p>
                      <p>
                        But the truth is, all these Web3 interactions were still
                        happening on traditional Web2 mediums and platforms.
                        ‘Metaverse’ was on everyones lips and in every projects
                        roadmaps but meanwhile nothing was actually happening in
                        the Metaverse.
                      </p>
                      <p>
                        Even now “innovation” in the Metaverse is struggling to
                        move beyond simply slapping a Metamask integration onto
                        an otherwise generic video game experience.
                      </p>
                      <p>
                        By that standard, the most successful Metaverse right
                        now wasn’t even born from Web3 - it’s Roblox. In order
                        to move beyond that, we have to elevate our standards
                        for what the Metaverse can be.
                      </p>
                      <p>And that’s why we decided to make Zoofrenz.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 class="why-banner__title section-title section-title--blue">
                What We Believe in
              </h2>

              <div class="why-banner__row">
                <div class="why-banner__col">
                  <div class="card card--green">
                    <h3 class="card__title">
                      Interoperable <span>Identity</span>
                    </h3>

                    <div class="card__body">
                      <p>
                        An ever evolving digital identity for the future.
                        Seamlessly interoperable between the 2D and 3D worlds.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="why-banner__col">
                  <div class="why-banner__img">
                    <img src="img/why/why-b-img.png" alt="" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8">
                  <div class="card card--brown">
                    <h3 class="card__title">Multi-<span>Media</span></h3>

                    <div class="card__body">
                      <p>
                        We are starting with the 3D characters, but will also be
                        building games, animations, physical merchandise and
                        more. Creating a wholesome experience that will stand
                        the test of time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="why-img-text">
          <div class="why-img-text__container container">
            <div class="why-img-text__wrap">
              <img
                src="img/why/img-text-01.png"
                alt=""
                class="why-img-text__img"
              />

              <div class="why-img-text__content">
                <div class="why-img-text__card card card--purple">
                  <h3 class="card__title">
                    <span>cOMMUNITY</span> <br />
                    CENTRIC
                  </h3>

                  <div class="card__body">
                    <p>
                      We want to be building WITH our holders instead of
                      building FOR our holders. Zombot is their web3 Sherpa,
                      guiding and shaping your identity through our unique
                      expertise as game builders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section__container container">
            <div class="section__wrap">
              <div class="row">
                <div class="col-md-8">
                  <div class="card card--brown">
                    <h3 class="card__title">
                      CONSTANT <br />
                      <span>INNOVATION</span>
                    </h3>

                    <div class="card__body">
                      <p>
                        We’re not here to build trash or derivative projects. We
                        want to push boundries, take calculated risks, be brave,
                        explore the unknown and think differently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section__container container">
            <div class="section__wrap">
              <div class="row align-items-center">
                <div class="col-md-3 pc-only"></div>
                <div class="col-md-3 pc-only">
                  <img src="img/why/img-text-02.png" alt="" />
                </div>

                <div class="col-md-6">
                  <div class="card card--green">
                    <h3 class="card__title">
                      Delightful <br />
                      <span>TOUCH</span>
                    </h3>

                    <div class="card__body">
                      <p>
                        Delight is the experience we want our holder to have
                        when interacting with our product offerings. Every step
                        of their product journey must be engaging, dlightful,
                        and full of pleasant surprises.
                      </p>
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
    export default {
        name: 'WhyView',
        mounted() {
            document.body.className = 'why-page pc webp';
        }
    }
</script>