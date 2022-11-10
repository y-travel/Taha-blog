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
                        {{ tour.title }}
                    </h2>
                    <!-- <img width="300px" height="300px" :src="`http://localhost:1337${tour.image[0].url}`" /> -->
                    <!-- :to="`/tour?id=${tour.id}`" -->

                    <p>
                        {{ tour.slug }}
                    </p>
                    <br />
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <hr />
                    <p class="desc">
                        <b>توضیحات تور</b><br /><br />
                        {{ tour.content }}

                    </p>
                </div>
            </div>

        </div>

        <Footer></Footer>

    </div>
</template>
    
<script lang="ts">
import process, { env } from 'process';
import { defineComponent, onMounted, ref } from 'vue'
import { getRequest } from '~/utils'

export default defineComponent({
    name: 'Tour',

    setup(context) {
        const tour = ref({} as any);
        const loading2 = ref();


        const init = async () => {
            loading2.value = true;
            var tourID = (globalThis as any).$nuxt._route.query.id;

            try {
                tour.value = (await getRequest('/api/tour-pages/' + tourID + '?populate=*'))?.data
                let url = tour.value.image[0].url;
                debugger

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
            tour,
            loading2,

            availableLocales() {
                return ['fa'] //@TODO implement
                // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            },
        }
    },
})
</script>