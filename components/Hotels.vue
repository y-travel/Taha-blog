<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
        <!-- {{ JSON.stringify(pkgs) }} -->
        <!-- <h2 class="title text-center">{{ $t('pakages') }}</h2> -->

        <!-- {{loading2}} -->
        <div class="row" dir="center">
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

        <div class="text-center"> <!-- ======= Pagination ======= -->
            <div>
                <nuxt-link class="navbar-brand" to="/AllHotels">
                    {{ $t('more') }}
                </nuxt-link>
            </div>
            
            {{htlpagesInfo}}
            
            <nav aria-label="Page navigation example">
                <div class="d-flex justify-content-center">
                    <ul class="pagination text-center">
                        <li class="page-item">
                            <a class="page-link" @click="changeP(htlpageNo-1)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>

                        <li class="page-item" v-for="n in htlPages" :key="n" v-on:click="changeP(n)">
                            <a class="page-link" @click="changeP(n)">{{n}}</a>
                        </li>

                        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li> -->

                        <li class="page-item">
                            <a class="page-link" @click="changeP(htlpageNo+1)" aria-label="Next">
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
                console.log("htlCount: " + htlCount.value);
                htlCount.value = (await getRequest('http://stage.tourine.ir/api/hotels'))?.data.length;
                console.log("htlCount: " + htlCount.value);

                htlPages.value = Math.ceil(htlCount.value / 4);
                console.log("htlPages: " + htlPages.value);

                hotels.value = (await getRequest('http://stage.tourine.ir/api/hotels?pagination[page]=1&pagination[pageSize]=4'))?.data;

                // console.log("result: " + pkgs.data.status.value);

                htlpagesInfo.value = (htlpageNo.value as string) + "/" + (htlPages.value as string);

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
            hotels,
            htlpageNo,
            htlPages,
            htlloading2,
            htlpagesInfo,

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
                // console.log((pkgs.value as any).length)
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