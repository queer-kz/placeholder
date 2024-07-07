<template>
  <div :class="$style.container">
    <!-- Nav -->
    <Nav />

    <!-- Content -->
    <div :class="$style.inner">

      <main :class="$style.main">
        <slot />
      </main>

      <Socials v-if="homeRoutes.includes(String(route.name))" :class="$style.news" />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const homeRoutes = ['index', 'share', 'en', 'lt']
</script>

<style lang="scss" module>
  @font-face {
    font-family: 'Rubik';
    src: url('~/assets/fonts/rubik-wght.ttf') format('truetype');
  }

  :global(:root) {
    --main-background: #fff;
    --text-color: #000;
    --second-text-color: #757575;
    --divider-color: #000;
    --border-color: #d6d6d6;
    --primary-color: #e66199;
    --fk-color-primary: #e66199;

    font-family: 'Rubik', sans-serif;
    background-color: var(--main-background);
    color: var(--text-color);

    @media (prefers-color-scheme: dark) {
      --main-background: #1e1e1e;
      --text-color: #ffffff;
      --second-text-color: #bdbdbd;
      --divider-color: #757575;
      --border-color: #e9e9e9;
      --primary-color: #fd94b3;
    }
  }

  a {
    color: var(--primary-color);
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

  :global(.petition-link) {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px 12px 18px;
    color: var(--text-color);
    border-radius: 6px;
    text-decoration: none;

    &::before {
      position: absolute;
      z-index: -1;
      content: '';
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--primary-color);
      opacity: 0.1;
    }

    svg {
      fill: var(--text-color);
    }

    box-shadow: 0 0 0 2px var(--primary-color);
  }
</style>
