<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

        <b-overlay :show="htlloading" no-wrap></b-overlay>

        <HeaderMenu></HeaderMenu>

        <h2 class="title text-center">{{ $t('hotels') }}</h2>
        <br />

        <div class="row" v-for="htl in hotels" :key="htl.id" style="padding-bottom: 5px !important; min-height: 100px"
            v-lazy-load>
            <div class="col-sm-2"></div>

            <b-card class="col-sm-8 title list" img-right align="right">
                <div class="col-sm-11">
                    <div class="title">
                        <h3>{{ htl.name }} </h3>
                        <div class="col-sm-3">
                            <div>
                                <nuxt-link class="btn btn-default" :to="`/HotelDetail?id=${htl.id}`">
                                    <img src="/assets/svg/bars.svg" width="10" />{{ $t('detail') }}&nbsp;&nbsp;&nbsp;
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <span class="large">
                                {{ htl.address }}
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
import { getRequest } from '~/utils';
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default defineComponent({
    name: "AllHotels",

    setup() {
        const hotels = ref({} as any);
        const htlloading = ref();

        const init = async () => {
            htlloading.value = "true";
            try {
                hotels.value = (await getRequest('/api/hotels'))?.data;
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
            hotels,
            htlloading,
        };
    },
    components: { Footer, HeaderMenu }
})
</script>