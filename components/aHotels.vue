<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
        <!-- {{ JSON.stringify(pkgs) }} -->
        <!-- <h2 class="title text-center">{{ $t('pakages') }}</h2> -->

        <!-- {{loading2}} -->
        <div class="row" dir="center">
            <b-card class="col" style="border:0 !important; min-height: 250px;">
                <b-card-text>
                    <b-overlay :show="htlloading2" no-wrap></b-overlay>
                    <div class="col-sm-3" v-for="hotel in htlpkgs" :key='hotel.id'>
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

    name: "aHotels",

    setup() {
        const htlpkgs = ref({} as any);
        const htlloading2 = ref();

        const init = async () => {
            htlloading2.value = true;
            try {

                htlpkgs.value = (await getRequest('http://stage.tourine.ir/api/hotels'))?.data;


            }
            catch (err: any) {
                console.log("result: " + err.status.value);
                // if(err.status.value == 200)
            }
            
        };

        onMounted(async () => {

            await init();

            htlloading2.value = false;

        })

        return {
            htlpkgs,
            htlloading2,

            availableLocales() {
                return ['fa'];//@TODO implement 
                // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            },
        };
    },
})
</script>