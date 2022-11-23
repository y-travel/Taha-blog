<template>
  <div :class="{ ltrdir: $i18n.locale === 'en' }">
    <HeaderMenu></HeaderMenu>

    <!-- {{ JSON.stringify(pkgs) }} -->
    <h2 class="title text-center">{{ $t('packages') }}</h2>

    <br />
    <!-- {{loading}} -->
    <b-overlay :show="loading" no-wrap></b-overlay>

    <div
      class="row"
      v-for="pkg in pkgs"
      :key="pkg.id"
      style="padding-bottom: 5px !important; min-height: 100px"
      v-lazy-load
    >
      <div class="col-sm-2"></div>

      <b-card class="col-sm-8 title list" img-right align="right">
        <div class="col-sm-11">
          <div class="title">
            <h3>{{ pkg.name }}</h3>
            <div class="col-sm-3">
              <span class="price" title="قیمت پایه">
                {{
                  pkg.totalPackagePrice
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }}
                <br />
              </span>

              <div>
                <nuxt-link
                  class="btn btn-default"
                  :to="`/PackageDetail?id=${pkg.id}`"
                >
                  <img src="/assets/svg/bars.svg" width="10" />{{
                    $t('detail')
                  }}&nbsp;&nbsp;&nbsp;
                </nuxt-link>

                <a
                  :href="`/app/#/reservations?packageId=${pkg.id}`"
                  :disabled="pkg.isComplete"
                  class="btn btn-default add-to-cart"
                >
                  <img src="/assets/svg/dollar.svg" width="7" />
                  {{ $t('reserve') }}&nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>

            <div class="col-sm-9">
              <span class="large" title="رفت">
                <img
                  src="/assets/svg/plane.svg"
                  width="15"
                  v-if="pkg.departure?.name == 'هوایی'"
                />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.departure?.name }}
                &nbsp;&nbsp;&nbsp;
              </span>
              <span class="large" title="برگشت">
                <img
                  src="/assets/svg/plane.svg"
                  width="15"
                  v-if="pkg.return?.name == 'هوایی'"
                />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.return?.name }}
              </span>
              <br />

              <!-- <span class="large" title="نجف"> -->

              <!-- </span> -->

              <span class="large">
                <img src="/assets/svg/hotel.svg" width="15" />
                {{ pkg.hotelPlan[0].hotel.address }}/
                {{ pkg.hotelPlan[0].hotel.name }} ({{
                  dateDiff1(pkg.hotelPlan[0].dateFrom, pkg.hotelPlan[0].dateTo)
                }}
                {{ $t('night') }}) <br /><img
                  src="/assets/svg/hotel.svg"
                  width="15"
                />
                {{ pkg.hotelPlan[0].hotel.address }}/
                {{ pkg.hotelPlan[1].hotel.name }} ({{
                  dateDiff1(pkg.hotelPlan[1].dateFrom, pkg.hotelPlan[1].dateTo)
                }}
                {{ $t('night') }})
              </span>
            </div>
          </div>
        </div>

        <div class="col-sm-1">
          <img
            src="/assets/images/home/karbala-logo.png"
            alt="img"
            style="position: absolute; height: 50px"
          />
        </div>
      </b-card>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { getRequest, dateDiff, nowIsoDate } from '~/utils';
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default defineComponent({
  name: 'AllPackage',

  setup() {
    const pkgs = ref({} as any);
    const loading = ref();

    const init = async () => {
      loading.value = true;
      pkgs.value = (
        await getRequest(
          `/api/packages?sort=startDate:ASC&populate=departure,return,hotelPlan.hotel&filters[isActive]=true&filters[startDate][$gt]=${nowIsoDate()}`
        )
      )?.data;
    };
    onMounted(async () => {
      await init();
      loading.value = false;
    });
    onUpdated(async () => {
      // loading.value = false
    });
    return {
      pkgs,
      loading,
      dateDiff1(str1: string, str2: string) {
        //@TODO
        return dateDiff(str1, str2);
      },
      availableLocales() {
        return ['fa']; //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    };
  },
  components: { Footer, HeaderMenu },
});
</script>
