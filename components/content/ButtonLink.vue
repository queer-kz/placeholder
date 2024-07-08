<template>
  <NuxtLink :to="to" :class="$style.container">
    <IconFill />
    <span>{{ title }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps(['to', 'title'])
</script>

<style lang="scss" module>
  .container {
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
      --color: var(--text-color);
      width: 24px;
    }

    box-shadow: 0 0 0 2px var(--primary-color);
  }
</style>
