<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

        <HeaderMenu></HeaderMenu>

        <AHotels></AHotels>

        <Footer></Footer>

    </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';
import AHotels from '../components/aHotels.vue';

export default defineComponent({
    name: "AllHotels",
    setup() {
        const homeLoading = ref();
        const init = async () => {
            homeLoading.value = "true";
        };
        onMounted(async () => {
            await init();
        });
        onUpdated(async () => {
            homeLoading.value = false;
        });
        return {
            homeLoading,
        };
    },
    components: { Footer, HeaderMenu, AHotels }
})
</script>