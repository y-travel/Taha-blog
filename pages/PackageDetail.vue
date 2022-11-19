<template>
  <div :class="{ 'ltrdir headerltr': $i18n.locale === 'en', 'rtldir': 'true' }">

    <b-overlay :show="loading2" no-wrap></b-overlay>

    <HeaderMenu></HeaderMenu>

    <div class="container">

      <div class="row">
        <div class="col-sm-1">
          <br /><br />
          <img src="/assets/images/home/karbala-logo.png" class="img-responsive" height="50px" />

        </div>
        <div class="col-sm-11">
          <h2 class="title text-center">
            {{ pkg.name }}
            <a href="#">
              <b-button variant="success" class="large" style="border-radius:10px;">
                &nbsp;&nbsp;&nbsp;{{ $t('reserve') }}&nbsp;&nbsp;&nbsp;
              </b-button>
            </a>
          </h2>
          <div class="row">
            <div class="col-sm-9 desc">
              {{ $t('from') }} &nbsp; {{ startDate }} &nbsp; {{ $t('to') }} &nbsp; {{ endDate }}
            </div>
            <div class="col-sm-3 desc" style="border:2px !important">
              <span class="price" title="قیمت پایه">
                {{ pkg.basePrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} <br />
              </span>

              <span title="رفت">
                <img src="/assets/svg/plane.svg" width="15" v-if="pkg.departure?.name == 'هوایی'" />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.departure?.name }}&nbsp;&nbsp;&nbsp;
              </span>
              <span title="برگشت">

                <img src="/assets/svg/plane.svg" width="15" v-if="pkg.return?.name == 'هوایی'" />
                <img src="/assets/svg/bus.svg" width="15" v-else />
                {{ pkg.return?.name }}

                <br />
              </span>

            </div>
          </div>
          <br />

          <span class="desc" v-for="(htl, index) in pkg.hotelPlan" :key="htl.id">
            <img src="/assets/svg/hotel.svg" width="15" />
            {{ $t('hotel') }} {{ htl.hotel.name }} ({{ htlDue[index] }} {{ $t('night') }})
            <br />
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <hr />
          <p class="desc">
            <b>قوانین و مقررات پکیج</b><br/>
            {{pkg.description}}
            <br/><br/>
            <b>قوانین و مقررات تور</b><br/>
            ۱- وب‌سایت تورینه طبق قوانین جمهوری اسلامی ایران، قوانین جرایم
            اینترنتی و مجموعه‌ی قوانین و مقررات تجارت الکترونیکی فعالیت
            می‌کند.<br />

            ۲- کاربران متعهد می‌شوند که اطلاعات خود را هنگام ثبت‌نام و
            رزرو به صورت صحیح در وب‌سایت وارد کنند. در صورت ورود اطلاعات
            ناقص يا نادرست، مسئولیت عواقب بعدی این عمل بر عهده‌ی کاربران
            خواهد بود.<br />
          </p>
        </div>
      </div>

    </div>

    <Footer></Footer>

  </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getRequest, dateDiff, getMonthName } from '~/utils'

export default defineComponent({
  name: 'PackageDetail',

  setup(context) {
    const pkg = ref({} as any);
    const loading2 = ref();
    var htlDue = [0, 0];
    const htlFrom = ref();
    const htlTo = ref();

    const startDate = ref();
    const endDate = ref();

    const init = async () => {
      loading2.value = true;
      var pkgID = (globalThis as any).$nuxt._route.query.id;

      // let today = new Date("2022/01/01").toLocaleDateString('fa-IR');

      try {

        pkg.value = (
          await getRequest(
            '/api/packages/' + pkgID + '?populate=departure,return,hotelPlan.hotel'
          )
        )?.data

        startDate.value = (new Date(pkg.value.startDate.replaceAll("-", "/")).toLocaleDateString('fa-IR')).substring(5);
        startDate.value = getMonthName(startDate.value)

        endDate.value = (new Date(pkg.value.endDate.replaceAll("-", "/")).toLocaleDateString('fa-IR')).substring(5);
        endDate.value = getMonthName(endDate.value)

        for (var i = 0; i < pkg.value.hotelPlan.length; i++) {
          htlFrom.value = pkg.value.hotelPlan[i].dateFrom;
          htlTo.value = pkg.value.hotelPlan[i].dateTo;

          htlDue[i] = dateDiff(htlFrom.value, htlTo.value);
          console.log(i.toString() + dateDiff(htlFrom.value, htlTo.value).toString());
        }

      } catch (err: any) {
        console.log('result: ' + err.status.value)
      }
    }

    onMounted(async () => {
      await init()

      loading2.value = false
    })

    return {
      pkg,
      loading2,
      htlDue,
      startDate,
      endDate,
      dateDiff1(str1: string, str2: string) {
        return dateDiff(str1, str2)
      },

      availableLocales() {
        return ['fa'] //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    }
  },
})
</script>