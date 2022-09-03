<template>
  <div>

    <HeaderMenu></HeaderMenu>

    <Home></Home>

    <transition name="home"></transition>

    <Footer></Footer>

  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue';
import Home from '~/components/Home.vue';
import Footer from '~/components/Footer.vue';

export default {

  transition: {
    name: 'home',
    mode: 'out-in'
  },

  components: {
    Footer,
    HeaderMenu,
    Home,
}
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: all .5s;
}

.home-enter,
.home-leave-active {
  transform: scale(0);
}
</style>