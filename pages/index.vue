<template>
  <div>
    <!-- <b-overlay :show="loading" no-wrap></b-overlay> -->

    <HeaderMenu></HeaderMenu>

    <Home></Home>

    <Footer></Footer>

  </div>
</template>

<script lang="ts">
import HeaderMenu from '~/components/HeaderMenu.vue';
import Home from '~/components/Home.vue';
import Footer from '~/components/Footer.vue';

export default {

  components: {
    Footer,
    Home,
    HeaderMenu,
  }
}
</script>