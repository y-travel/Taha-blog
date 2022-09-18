<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
        <!-- {{ JSON.stringify(pkgs) }} -->
        <!-- <h2 class="title text-center">{{ $t('pakages') }}</h2> -->

        <!-- {{loading2}} -->
        <div class="row" dir="center">
            <b-card class="col" style="border:0 !important; min-height: 250px;">
                <b-card-text>
                    <b-overlay :show="loading2" no-wrap></b-overlay>
                    <div class="col-sm-3" v-for="pkg in pkgs" :key='pkg.id'>
                        <div class="product-image-wrapper">
                            <div class="single-products">
                                <div class="productinfo text-center">
                                    <img src="/assets/images/home/Gallery.jpg" alt="img" />
                                    <h2>{{pkg.name}}</h2>
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
                <nuxt-link class="navbar-brand" to="/AllPackages" active-class="active">
                    {{ $t('more') }}
                </nuxt-link>
            </div>
            {{pagesInfo}}
            
            <nav aria-label="Page navigation example">
                <div class="d-flex justify-content-center">
                    <ul class="pagination text-center">
                        <li class="page-item">
                            <a class="page-link" @click="changeP(pageNo-1)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>

                        <li class="page-item" v-for="n in pkgPages" :key="n" v-on:click="changeP(n)">
                            <a class="page-link" @click="changeP(n)">{{n}}</a>
                        </li>

                        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li> -->

                        <li class="page-item">
                            <a class="page-link" @click="changeP(pageNo+1)" aria-label="Next">
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

    name: "Packages",

    setup() {
        const pkgs = ref({} as any);
        const pageNo = ref("1");
        const loading2 = ref();
        const pkgCount = ref();
        const pkgPages = ref();
        const pagesInfo = ref();

        const init = async () => {
            loading2.value = true;
            try {

                pkgCount.value = (await getRequest('http://stage.tourine.ir/api/packages')).data.length;
                console.log("pkgCount: " + pkgCount.value);

                pkgPages.value = Math.ceil(pkgCount.value / 4);
                console.log("pkgPages: " + pkgPages.value);

                pkgs.value = (await getRequest('http://stage.tourine.ir/api/packages?pagination[page]=1&pagination[pageSize]=4'))?.data;

                // console.log("result: " + pkgs.data.status.value);

                pagesInfo.value = (pageNo.value as string) + "/" + (pkgPages.value as string);

            }
            catch (err: any) {
                console.log("result: " + err.status.value);
                // if(err.status.value == 200)
            }

        };

        onMounted(async () => {

            await init();

            loading2.value = false;

        })

        return {
            pkgs,
            pageNo,
            pkgPages,
            loading2,
            pagesInfo,

            async changeP(PageNo: string) {
                loading2.value = true;

                if (PageNo > pkgPages.value) {
                    PageNo = pkgPages.value
                }
                if (PageNo < "1") {
                    PageNo = "1"
                }

                pkgs.value = (await getRequest('http://stage.tourine.ir/api/packages?pagination[page]='
                    + PageNo + '&pagination[pageSize]=4')).data;

                loading2.value = false;
                // console.log((pkgs.value as any).length)
                pageNo.value = PageNo;
                pagesInfo.value = (pageNo.value as string) + "/" + (pkgPages.value as string);
                console.log(pageNo.value)
            },
            availableLocales() {
                return ['fa'];//@TODO implement 
                // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            },
        };
    },
})
</script>