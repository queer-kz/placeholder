// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt', "nuxt-gtag", "@nuxt/content", "@nuxt/image"],

  pages: true,
  
  formkit: {
    autoImport: true
  },

  gtag: {
    id: 'G-LH6JL5VWWS'
  },
  
  content: {
    contentHead: false,
    documentDriven: true,
    locales: [],
    defaultLocale: 'ru'
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon.middle.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.apple.png' },
      ],
      meta: [
        { name: 'color-scheme', content: 'light dark' },
      ],
      titleTemplate: '%s — Queer.kz'
    },
  },

  css: [
    'normalize.css',
    '~/assets/scss/main.scss',
  ],

  compatibilityDate: '2024-07-05',
})
