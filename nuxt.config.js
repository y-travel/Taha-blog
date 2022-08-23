export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'طاها',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/prettyPhoto.css" },
      { rel: "stylesheet", href: "/assets/css/price-range.css" },
      { rel: "stylesheet", href: "/assets/css/animate.css" },
      { rel: "stylesheet", href: "/assets/css/main.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "icon", href: "/assets/images/ico/favicon.ico" },
      { rel: "apple-touch-icon-precomposed", href: "/assets/images/ico/apple-touch-icon-144-precomposed.png" },
      { rel: "apple-touch-icon-precomposed", href: "/assets/images/ico/apple-touch-icon-114-precomposed.png" },
      { rel: "apple-touch-icon-precomposed", href: "/assets/images/ico/apple-touch-icon-72-precomposed.png" },
      { rel: "apple-touch-icon-precomposed", href: "/assets/images/ico/apple-touch-icon-57-precomposed.png" },

    ],
    script: [
      { src: "/assets/js/jquery.js" },
      { src: "/assets/js/bootstrap.min.js" },
      { src: "/assets/js/jquery.scrollUp.min.js" },
      { src: "/assets/js/price-range.js" },
      { src: "/assets/js/jquery.prettyPhoto.js" },
      { src: "/assets/js/main.js" },
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
