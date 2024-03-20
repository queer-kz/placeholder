// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Queer.KZ',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: [
    'normalize.css'
  ],
})
