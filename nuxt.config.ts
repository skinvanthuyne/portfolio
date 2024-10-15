// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@formkit/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    // Content module configuration
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})