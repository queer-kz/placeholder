// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt', "nuxt-gtag"],
  
  formkit: {
    autoImport: true
  },

  gtag: {
    id: 'G-LH6JL5VWWS'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: [
    'normalize.css',
  ],

  compatibilityDate: '2024-07-05',
})
