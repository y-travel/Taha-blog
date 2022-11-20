<template>
  <div :class="{ 'ltrdir headerltr': $i18n.locale === 'en', rtldir: 'true' }">
    <b-overlay :show="loading2" no-wrap></b-overlay>

    <HeaderMenu></HeaderMenu>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="title text-center">
            {{ tour.title }}
          </h2>
          <p>{{ tour.slug }}</p>

          <br />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <hr />
          <p class="desc">
            <b>توضیحات</b><br /><br />
            {{ tour.content }}
          </p>
        </div>
      </div>

      <div class="row">
        <img
          v-for="(img, index) in imgs"
          :key="img.index"
          :src="`${img}`"
          class="img-responsive"
          style="padding-left: 10px"
          width="250"
        />
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getRequest } from '~/utils';

export default defineComponent({
  name: 'TourDetail',

  setup() {
    const tour = ref({} as any);
    const loading2 = ref();
    var imgs = [3];

    const init = async () => {
      loading2.value = true;
      var tourID = (globalThis as any).$nuxt._route.query.id;

      tour.value = (
        await getRequest('/api/tour-pages/' + tourID + '?populate=*')
      )?.data;

      for (var i = 0; i < tour.value.image.length; i++) {
        imgs[i] = tour.value.image[i].url;
      }
    };

    onMounted(async () => {
      await init();

      loading2.value = false;
    });

    return {
      tour,
      loading2,
      imgs,

      availableLocales() {
        return ['fa']; //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    };
  },
});
</script>
