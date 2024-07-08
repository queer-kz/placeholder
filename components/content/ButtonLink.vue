<template>
  <div :class="sticky ? $style.sticky : ''">
    <NuxtLink :to="to" :class="$style.inner">
      <IconFill />
      <span :class="$style.title">{{ title }}</span>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['to', 'title', 'sticky'])
</script>

<style lang="scss" module>
  @media (max-width: 948px) {
    .sticky {
      position: sticky;
      bottom: 0px;
      display: block;
      backdrop-filter: blur(8px);
      margin-top: -14px;
      margin: -14px -14px -14px -14px;
      padding: 14px;

      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--main-background);
        opacity: 0.8;
      }

      .inner {
        width: calc(100% - 28px);
      }
      
      .title {
        margin: 0 auto;
      }
    }
  }

  .inner {
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
