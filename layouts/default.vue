<template>
  <!-- Nav -->
  <Nav />

  <!-- Content -->
  <div :class="$style.inner">

    <main :class="$style.main">
      <NavigationSwitchLocale v-if="localeSwitcher" :slug="localeSwitcher" />
      <slot />
    </main>

    <Socials v-if="withPress" :class="$style.news" />
  </div>

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
</style>
