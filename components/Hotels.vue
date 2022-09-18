<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
        <!-- {{ JSON.stringify(hotels) }} -->
        <!-- <h2 class="title text-center">{{ $t('pakages') }}</h2> -->

        <!-- {{loading2}} -->
        <div class="row">
            <b-card class="col" style="border:0 !important; min-height: 250px;">
                <b-card-text>
                    <b-overlay :show="htlloading2" no-wrap></b-overlay>
                    <div class="col-sm-3" v-for="hotel in hotels" :key='hotel.id'>
                        <div class="product-image-wrapper">
                            <div class="single-products">
                                <div class="productinfo text-center">
                                    <img src="/assets/images/home/Gallery.jpg" alt="img" />
                                    <h2>{{hotel.name}}</h2>
                                    <p>توضیحات کوتاه محصول</p>
                                    <a href="#" class="btn btn-default add-to-cart"><i
                                            class="fa fa-shopping-cart"></i>افزودن به
                                        سبـد خرید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card-text>

            </b-card>

        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getRequest } from '~/utils';

export default defineComponent({
    name: "Hotels",

    setup() {
        const hotels = ref({} as any);
        const htlpageNo = ref("1");
        const htlloading2 = ref();
        const htlCount = ref();
        const htlPages = ref();
        const htlpagesInfo = ref();

        const init = async () => {
            htlloading2.value = true;

            try {
                htlCount.value = (await getRequest('http://stage.tourine.ir/api/hotels')).data.length;
                htlPages.value = Math.ceil(htlCount.value / 4);

                console.log(htlCount.value);
                console.log(htlPages.value);

                hotels.value = (await getRequest('http://stage.tourine.ir/api/hotels?pagination[page]=1&pagination[pageSize]=4'))?.data;
            }
            catch (err) {
                console.log("err");
            }
            htlloading2.value = false;
        };
        onMounted(async () => {
            await init();

            htlpagesInfo.value = (htlpageNo.value as string) + "/" + (htlPages.value as string);
        })
        return {
            hotels,
            htlpageNo,
            htlloading2,
            htlpagesInfo,
            htlPages,

            async changeP(PageNo: string) {
                htlloading2.value = true;

                if (PageNo > htlPages.value) {
                    PageNo = htlPages.value
                }
                if (PageNo < "1") {
                    PageNo = "1"
                }

                hotels.value = (await getRequest('http://stage.tourine.ir/api/hotels?pagination[page]='
                    + PageNo + '&pagination[pageSize]=4')).data;

                htlloading2.value = false;

                // console.log((hotels.value as any).length)
                htlpageNo.value = PageNo;
                htlpagesInfo.value = (htlpageNo.value as string) + "/" + (htlPages.value as string);
                console.log(htlpageNo.value)
            },
            availableLocales() {
                return ['fa'];//@TODO implement 
                // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            },
        };
    },

})
</script>