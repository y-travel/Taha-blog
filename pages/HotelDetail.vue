<template>
    <div :class="{ 'ltrdir headerltr': $i18n.locale === 'en','rtldir':'true' }">
  
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
                {{ htl.name }}
              </h2>
            <div class="about">
              <div class="row">
                <div class="col-sm-3" style="border:2px !important">
                  <span class="large">
                    {{ htl.address }} <br />
                  </span>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
  
        <div class="row">
          <div class="col-sm-12">
            <div class="about">
              <hr />
              <p class="desc">
                <b>توضیحات هتل</b><br /><br />
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
  
      </div>
  
      <Footer></Footer>
  
    </div>
  </template>
    
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getRequest } from '~/utils'
  
  export default defineComponent({
    name: 'HotelDetail',
  
    setup(context) {
      const htl = ref({} as any);
      const loading2 = ref();

      const init = async () => {
        loading2.value = true;
  
        var pkgID = (globalThis as any).$nuxt._route.query.id;
  
        // let today = new Date("2022/01/01").toLocaleDateString('fa-IR');
  
        try {
          // debugger
          htl.value = (
            await getRequest(
              '/api/hotels/' + pkgID 
              //+ '?populate=departure,return,hotelPlan.hotel'
            )
          )?.data
  
        } catch (err: any) {
          console.log('result: ' + err.status.value)
          // if(err.status.value == 200)
        }
      }
  
      onMounted(async () => {
        await init()
  
        loading2.value = false
      })
  
      return {
        htl,
        loading2,
  
        availableLocales() {
          return ['fa'] //@TODO implement
          // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        },
      }
    },
  })
  </script>  