<template>
  <div>

    <!-- <b-overlay :show="homeLoading" no-wrap></b-overlay> -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/assets/images/home/01.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/assets/images/home/02.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/assets/images/home/03.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/assets/images/home/04.jpg" alt="Second slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div>
      <b-card no-body>
        <b-tabs content-class="mt-3" align="center" lazy>
          <b-tab :title="$t('pakages')" active>
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

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

export default defineComponent({
    name: "Home",
    setup() {
        const homeLoading = ref();
        const init = async () => {
            // homeLoading.value = "true";
        };
        onMounted(async () => {
            await init();
        });
        onUpdated(async () => {
            // homeLoading.value = false;
        });
        return {
            homeLoading,
        };
    },
    components: {  }
})
</script>