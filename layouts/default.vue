<template>
  <!-- Nav -->
  <Nav />

  <!-- Content -->
  <main :class="$style.inner">
    <article :class="$style.main">
      <slot />
    </article>
  </main>

  <!-- Footer -->
  <Footer />
</template>

<script lang="ts" setup>
const page = useCurrentPage()
const localeSwitcher = computed(() => page.value?.withLocaleSwitcher)
const withPress = computed(() => !!page.value?.withPress)
</script>

<style lang="scss" module>
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

  :global(h1) {
    text-align: center;
  }
</style>
