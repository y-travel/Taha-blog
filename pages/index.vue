<template>
  <div>

    <transition name="home"></transition>

    <HeaderMenu></HeaderMenu>

    <Home></Home>

    <Hotels></Hotels>
    
    <Packages></Packages>

    <Footer></Footer>

  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue';
import Home from '~/components/Home.vue';
import Footer from '~/components/Footer.vue';
import Hotels from '~/components/Hotels.vue';
import Packages from '~/components/Packages.vue';

export default {

  transition: {
    name: 'home',
    mode: 'out-in'
  },

  components: {
    Footer,
    HeaderMenu,
    Home,
    Hotels,
    Packages
}
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: all .7s;
}

.home-enter,
.home-leave-active {
  transform: scale(0);
}
</style>