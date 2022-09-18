<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

        <HeaderMenu></HeaderMenu>

        <AllPackage></AllPackage>

        <Footer></Footer>

    </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import AllPackage from '~/components/AllPackage.vue';
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default defineComponent({
    name: "Home",
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
    components: { AllPackage, Footer, HeaderMenu }
})
</script>