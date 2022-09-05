export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'طاها',
    htmlAttrs: {
      lang: 'fa',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/main.css" },

    ],
    script: [
      { src: "/assets/js/jquery.js" },
      { src: "/assets/js/bootstrap.min.js" },
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
    // *** i18n ***
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix',

    defaultLocale: 'fa',

    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'fa',
        name: 'پارسی',
      }
    ],

    //======= @todo
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        en: {
          welcome: 'Welcome',
          home: 'Home',
          about: 'About',
          contact: 'Contact',
          search: 'Search',
        },
        fa: {
          welcome: 'خوش آمدید',
          home: 'خانه',
          about: 'درباره ما',
          contact: 'تماس با ما',
          search: 'جستجو',
        },
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}