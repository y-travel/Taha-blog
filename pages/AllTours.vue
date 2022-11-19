<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

        <b-overlay :show="htlloading" no-wrap></b-overlay>

        <HeaderMenu></HeaderMenu>

        <h2 class="title text-center">{{ $t('tours') }}</h2>
        <br />

        <div class="row" style="padding-bottom: 5px !important; min-height: 100px" v-lazy-load>
            <div class="col-sm-2"></div>

            <!-- <b-card class="col-sm-8 title list" img-right align="right">
                <div class="col-sm-11">
                    <div class="title">
                        <h3>{{ tour.title }} </h3>
                        <div class="col-sm-3">
                            <div>
                                <nuxt-link class="btn btn-default" :to="`/TourDetail?id=${tour.id}`">
                                    <img src="/assets/svg/bars.svg" width="10" />{{ $t('detail') }}&nbsp;&nbsp;&nbsp;
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <span class="large">
                                {{ tour.slug }}
                            </span>
                        </div>

                    </div>
                </div>

                <div class="col-sm-1">
                    <img :src="`${env.baseUrl}${tour.image[0].url}`" alt="img"
                        style="position: absolute;height:50px;" />
                </div>
            </b-card> -->

            <div class="col-sm-3" v-for="tour in tours" :key="tour.id">
                <b-card :title="`${tour.title}`" :img-src="`${env.baseUrl}${tour.image[0].url}`"
                    :img-alt="`${tours.slug}`" img-top tag="article" style="max-width: 20rem; text-align: right;"
                    class="mb-2">
                    <b-card-text>
                        {{ tour.content }}
                    </b-card-text>
                    <div style="text-align:center ;">
                        <nuxt-link class="btn btn-default" :to="`/TourDetail?id=${tour.id}`">
                            <img src="/assets/svg/bars.svg" width="10" />{{ $t('detail') }}&nbsp;&nbsp;&nbsp;
                        </nuxt-link>
                    </div>
                </b-card>
            </div>
        </div>

        <Footer></Footer>

    </div>
</template>


<script lang="ts">
import { getRequest } from '~/utils';
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';


export default defineComponent({
    name: "AllTours",

    setup() {
        const tours = ref({} as any);
        const htlloading = ref();
        const env = require('~/.env.json')

        const init = async () => {
            htlloading.value = "true";
            try {
                tours.value = (await getRequest('/api/tour-pages/?populate=*'))?.data;
            }
            catch (err: any) {
                console.log("result: " + err.status.value);
                // if(err.status.value == 200)
            }
        };
        onMounted(async () => {
            await init();
            // htlloading.value = false;
        });
        onUpdated(async () => {
            htlloading.value = false;
        });
        return {
            tours,
            htlloading,
            env,
        };
    },
    components: { Footer, HeaderMenu }
})
</script>