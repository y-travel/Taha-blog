<template>
  <div :class="{ ltrdir: $i18n.locale === 'en' }">
    <!-- {{ JSON.stringify(pkgs) }} -->
    <!-- <h2 class="title text-center">{{ $t('pakages') }}</h2> -->

    <!-- {{loading2}} -->
    <div class="row" dir="center">
      <b-card class="col" style="border: 0 !important; min-height: 120px">
        <b-card-text>
          <b-overlay :show="loading" no-wrap></b-overlay>

          <div class="col-sm-3" v-for="hotel in hotels" :key="hotel.id">
            <div class="col-sm-8 contact-info">
              <h2>{{ hotel.name }}</h2>
              <p>
                &nbsp;&nbsp;&nbsp;
                {{ hotel.address }}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <nuxt-link
                class="btn btn-default"
                :to="`/HotelDetail?id=${hotel.id}`"
              >
                <img src="/assets/svg/bars.svg" width="10" /> {{ $t('detail') }}
              </nuxt-link>
              &nbsp;&nbsp;
              <a href="#" class="btn btn-default add-to-cart">
                <img src="/assets/svg/dollar.svg" width="7" />
                {{ $t('reserve') }}
              </a>
            </div>
            <div class="col-sm-4">
              <img
                src="/assets/images/home/karbala-logo.png"
                style="padding: 5px; height: 50px"
                class="img-responsive"
                alt="img"
              />
            </div>
          </div>
        </b-card-text>
      </b-card>
    </div>

    <div class="text-center">
      <div>
        <nuxt-link class="navbar-brand" to="/AllHotels">
          {{ $t('more') }}
        </nuxt-link>
      </div>

      <!-- ======= Pagination ======= -->

      {{ htlpagesInfo }}

      <nav aria-label="Page navigation example">
        <div class="d-flex justify-content-center">
          <ul class="pagination text-center">
            <li class="page-item">
              <a
                class="page-link"
                @click="changeP(htlpageNo - 1)"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>

            <li
              class="page-item"
              v-for="n in htlPages"
              :key="n"
              v-on:click="changeP(n)"
            >
              <a class="page-link" @click="changeP(n)">{{ n }}</a>
            </li>

            <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li> -->

            <li class="page-item">
              <a
                class="page-link"
                @click="changeP(htlpageNo + 1)"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getRequest } from '~/utils'

export default defineComponent({
  name: 'Hotels',

  setup() {
    const hotels = ref({} as any)
    const htlpageNo = ref('1')
    const loading = ref()
    const htlCount = ref()
    const htlPages = ref()
    const htlpagesInfo = ref();

    const init = async () => {
      loading.value = true
      console.log('htlCount: ' + htlCount.value)
      htlCount.value = (await getRequest('/api/hotels'))?.data.length
      console.log('htlCount: ' + htlCount.value)

      htlPages.value = Math.ceil(htlCount.value / 4)
      console.log('htlPages: ' + htlPages.value)

      hotels.value = (
        await getRequest(
          '/api/hotels?pagination[page]=1&pagination[pageSize]=4'
        )
      )?.data

      // console.log("result: " + pkgs.data.status.value);

      htlpagesInfo.value =
        (htlpageNo.value as string) + '/' + (htlPages.value as string)
    }

    onMounted(async () => {
      await init()
      loading.value = false
    })

    return {
      hotels,
      htlpageNo,
      htlPages,
      loading,
      htlpagesInfo,

      async changeP(PageNo: string) {
        loading.value = true

        if (PageNo > htlPages.value) {
          PageNo = htlPages.value
        }
        if (PageNo < '1') {
          PageNo = '1'
        }

        hotels.value = (
          await getRequest(
            '/api/hotels?pagination[page]=' + PageNo + '&pagination[pageSize]=4'
          )
        ).data

        loading.value = false
        // console.log((pkgs.value as any).length)
        htlpageNo.value = PageNo
        htlpagesInfo.value =
          (htlpageNo.value as string) + '/' + (htlPages.value as string)
        console.log(htlpageNo.value)
      },
      availableLocales() {
        return ['fa'] //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    }
  },
})
</script>
