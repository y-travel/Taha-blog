<template>
  <div :class="{ ltrdir: $i18n.locale === 'en' }">
    <div dir="center">
      <b-card
        class="col-sm-12"
        align="right"
        style="border: 0 !important; min-height: 120px"
      >
        <b-card-text>
          <b-overlay :show="loading" no-wrap></b-overlay>
          <div class="col-sm-3" v-for="pkg in pkgs" :key="pkg.id">
            <div class="col-sm-8 contact-info">
              <h2>{{ pkg.name }}</h2>
              <p>
                &nbsp;&nbsp;&nbsp;{{
                  pkg.basePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }}ریال &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <span class="small" title="رفت">
                <img
                  src="/assets/svg/plane.svg"
                  width="15"
                  v-if="pkg.departure?.name == 'هوایی'"
                />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.departure?.name }}
                &nbsp;
              </span>
              <span class="small" title="برگشت">
                <img
                  src="/assets/svg/plane.svg"
                  width="15"
                  v-if="pkg.return?.name == 'هوایی'"
                />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.return?.name }}
              </span>
              <br /><br />
              <nuxt-link
                class="btn btn-default"
                :to="`/PackageDetail?id=${pkg.id}`"
              >
                <img src="/assets/svg/bars.svg" width="10" /> {{ $t('detail') }}
              </nuxt-link>
              &nbsp;&nbsp;
              <a
                :href="`/app/#/reservations?packageId=${pkg.id}`"
                :disabled="pkg.isComplete"
                class="btn btn-default add-to-cart"
              >
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
      <!-- ======= Pagination ======= -->
      <div>
        <nuxt-link class="navbar-brand" to="/AllPackages" active-class="active">
          {{ $t('more') }}
        </nuxt-link>
      </div>
      {{ pagesInfo }}

      <nav aria-label="Page navigation example">
        <div class="d-flex justify-content-center">
          <ul class="pagination text-center">
            <li class="page-item">
              <a
                class="page-link"
                @click="() => changeP(pageNo - 1)"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li
              class="page-item"
              v-for="n in pkgPages"
              :key="n"
              v-on:click="changeP(n)"
            >
              <a class="page-link" @click="() => changeP(n)">{{ n }}</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                @click="() => changeP(pageNo + 1)"
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
import { defineComponent, onMounted, ref } from 'vue';
import { getRequest, nowIsoDate } from '~/utils';

export default defineComponent({
  name: 'Packages',

  setup() {
    const pkgs = ref({} as any);
    const pageNo = ref(1);
    const loading = ref();
    const pkgCount = ref();
    const pkgPages = ref();
    const pagesInfo = ref();
    const changeP = async (PageNo: number) => {
      loading.value = true;

      if (PageNo > pkgPages.value) {
        PageNo = pkgPages.value;
      }
      if (PageNo < 1) {
        PageNo = 1;
      }
      const tmpRef = await getRequest(
        `/api/packages?pagination[page]=${PageNo}&pagination[pageSize]=4&populate=departure,return&filters[isActive]=true&filters[startDate][$gt]=${nowIsoDate()}`
      );

      pkgs.value = tmpRef.data;
      pkgCount.value = tmpRef.meta.pagination.total;
      pkgPages.value = Math.ceil(tmpRef.meta.pagination.total/tmpRef.meta.pagination.pageSize);

      pagesInfo.value = pageNo.value + '/' + (pkgPages.value as string);

      pageNo.value = PageNo;
      pagesInfo.value = pageNo.value + '/' + (pkgPages.value as string);
      console.log(pageNo.value);

      loading.value = false;
    };

    const init = async () => {
      await changeP(1);
    };

    onMounted(async () => {
      await init();
    });

    return {
      pkgs,
      pageNo,
      pkgPages,
      loading,
      pagesInfo,
      changeP,
    };
  },
});
</script>
