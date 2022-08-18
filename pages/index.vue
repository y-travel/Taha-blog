<template>
  <div>
    <Home />

    <!-- <nuxt />
    <nuxt-link to="fun">
      <h2 class="red">fun</h2>
    </nuxt-link> -->

       <script src="../assets/js/jquery.js"></script>
	<script src="../assets/js/bootstrap.min.js"></script>
	<script src="../assets/js/jquery.scrollUp.min.js"></script>
	<script src="../assets/js/price-range.js"></script>
    <script src="../assets/js/jquery.prettyPhoto.js"></script>
    <script src="../assets/js/main.js"></script>


  </div>
</template>

import Vue from 'vue'
import Home from '~/components/Home.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { Home }
})
</script>
