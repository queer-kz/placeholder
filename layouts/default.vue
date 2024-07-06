<template>
  <div :class="$style.container">
    <!-- Nav -->
    <Nav />

    <!-- Content -->
    <div :class="$style.inner">

      <main :class="$style.main">
        <slot />
      </main>

      <Socials v-if="route.name === 'index'" :class="$style.news" />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import ogRu from '~/assets/social/og-ru.png'
import { useRoute } from 'vue-router'

const route = useRoute()

useHead({
  title: 'Мы против против петиции «О запрете пропаганды ЛГБТ+ в Казахстане» — Queer.kz',
  meta: [
    {
      name: 'description',
      content: 'Петиция нарушает национальное законодательство и международные обязательства Казахстана и должна быть снята с рассмотрения.'
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content: 'Мы против против петиции «О запрете пропаганды ЛГБТ+ в Казахстане» — Queer.kz',
    },
    {
      property: 'og:description',
      content: 'Петиция нарушает национальное законодательство и международные обязательства Казахстана и должна быть снята с рассмотрения.',
    },
    {
      property: 'og:image',
      content: ogRu,
    }
  ]
})
</script>

<style lang="scss" module>
  @font-face {
    font-family: 'Rubik';
    src: url('~/assets/fonts/rubik-wght.ttf') format('truetype');
  }

  :global(body) {
    font-family: 'Rubik', sans-serif;
  }

  .container {
    display: block;
  }

  .inner {
    display: flex;
    max-width: calc(min(1340px, 100vw) - 62px);
    margin: 0 auto;
    gap: 32px;

    @media (max-width: 948px) {
      flex-direction: column;
    }
  }

  .main {
    flex: 1;
  }

  .news {
    width: 300px;
    @media (max-width: 948px) {
      width: 100%;
    }
  }
</style>
