<template>
  <div>

    <b-overlay :show="homeLoading" no-wrap></b-overlay>

    <HeaderMenu></HeaderMenu>

    <div class="row" style="border-radius: 50px !important;">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div>
          <b-carousel id="carousel-1" :interval="4000" controls indicators background="#ababab" img-width="700"
            img-height="400" style="text-shadow: 1px 1px 2px #333;">
            <!-- Slides with custom text -->
            <b-carousel-slide img-src="/assets/images/home/02.jpg">
              <h1>کربلا</h1>
            </b-carousel-slide>
            <b-carousel-slide img-src="/assets/images/home/03.jpg">
              <h1>کربلا</h1>
            </b-carousel-slide>
            <b-carousel-slide img-src="/assets/images/home/04.jpg">
              <h1>کربلا</h1>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <div class="col-sm-1"></div>
    </div>

    <div>
      <b-card no-body>
        <b-tabs content-class="mt-3" align="center" lazy>
          <b-tab :title="$t('packages')" active>
            <b-card-text>
              <Packages></Packages>
            </b-card-text>
          </b-tab>
          <b-tab :title="$t('hotels')">
            <b-card-text>
              <Hotels></Hotels>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <Footer></Footer>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import HeaderMenu from '~/components/HeaderMenu.vue';
import Footer from '~/components/Footer.vue';
import Hotels from '~/components/Hotels.vue';
import Packages from '~/components/Packages.vue';

export default defineComponent({
  name: "Home",
  setup() {
    const homeLoading = ref();

    const init = async () => {
      homeLoading.value = "true";
    };
    onMounted(async () => {
      await init();
    });
    onUpdated(async () => {
      homeLoading.value = false;
    });
    return {
      homeLoading,
    };
  },
  components: {
    Footer,
    HeaderMenu,
    Hotels,
    Packages
  }
})
</script>