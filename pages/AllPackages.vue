<template>
  <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

    <HeaderMenu></HeaderMenu>

    <!-- {{ JSON.stringify(pkgs) }} -->
    <h2 class="title text-center">{{ $t('packages') }}</h2>

    <br />
    <!-- {{loading2}} -->
    <b-overlay :show="loading2" no-wrap></b-overlay>

    <div class="row" v-for="pkg in pkgs" :key="pkg.id" style="padding-bottom: 5px !important; min-height: 100px"
      v-lazy-load>
      <div class="col-sm-2"></div>

      <b-card class="col-sm-8 title list" img-right align="right">
        <div class="col-sm-11">
          <div class="title">
            <h3>{{ pkg.name }} </h3>
            <div class="col-sm-3">
              <span class="price" title="قیمت پایه">
                {{ pkg.basePrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} <br />
              </span>

              <div>
                <nuxt-link class="btn btn-default" :to="`/PackageDetail?id=${pkg.id}`">
                  <img src="/assets/svg/bars.svg" width="10" />{{ $t('detail') }}&nbsp;&nbsp;&nbsp;
                </nuxt-link>

                <nuxt-link class="btn btn-default" :to="`/AllPackages`">
                  <img src="/assets/svg/dollar.svg" width="7" /> {{ $t('reserve') }}&nbsp;&nbsp;&nbsp;
                </nuxt-link>
              </div>
            </div>

            <div class="col-sm-9">
              <span class="large" title="رفت">
                <img src="/assets/svg/plane.svg" width="15" v-if="pkg.departure?.name=='هوایی'" />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.departure?.name }}
                &nbsp;&nbsp;&nbsp;
              </span>
              <span class="large" title="برگشت">
                <img src="/assets/svg/plane.svg" width="15" v-if="pkg.return?.name=='هوایی'" />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.return?.name }} 
              </span>
              <br />

              <!-- <span class="large" title="نجف"> -->

              <!-- </span> -->

              <span class="large">
                {{ pkg.hotelPlan[0].hotel.address }}/ {{ pkg.hotelPlan[0].hotel.name }}
                ({{ dateDiff1(pkg.hotelPlan[0].dateFrom, pkg.hotelPlan[0].dateTo) }} {{ $t('night') }})
                <br/>
                {{ pkg.hotelPlan[0].hotel.address }}/ {{ pkg.hotelPlan[1].hotel.name }}
                ({{ dateDiff1(pkg.hotelPlan[1].dateFrom, pkg.hotelPlan[1].dateTo) }} {{ $t('night') }})
              </span>
            </div>

          </div>
        </div>

        <div class="col-sm-1">
          <img src="/assets/images/home/karbala-logo.png" alt="img" style="position: absolute;height:50px;" />
        </div>
      </b-card>
    </div>

    <Footer></Footer>

  </div>
</template>


<script lang="ts">
import { getRequest, dateDiff } from '~/utils'
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default defineComponent({
  name: "AllPackage",

  setup() {
    const pkgs = ref({} as any)
    const loading2 = ref()

    var htlDue = [0, 0];
    const htlFrom = ref();
    const htlTo = ref();

    const init = async () => {
      loading2.value = true
      try {
        pkgs.value = (
          await getRequest(
            '/api/packages/?populate=departure,return,hotelPlan.hotel'
          )
        )?.data

        debugger;

      } catch (err: any) {
        console.log('result: ' + err.status.value)
        // if(err.status.value == 200)
      }
    };
    onMounted(async () => {
      await init();
      loading2.value = false
    });
    onUpdated(async () => {
      // loading2.value = false
    });
    return {
      pkgs,
      loading2,
      dateDiff1(str1: string, str2: string) { //@TODO
        return dateDiff(str1, str2)
      },
      availableLocales() {
        return ['fa'] //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    };
  },
  components: { Footer, HeaderMenu }
})
</script>