<template>
  <div :class="$style.container" @click="copy(reason)">
    <span v-if="copied" :class="$style.alert">✅ Скопировано</span>
    <div :class="$style.inner" ref="reasonEl">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const reasonEl = ref(null)
const reason = computed(() => {
  if (!!reasonEl.value?.textContent) {
    return reasonEl.value.textContent
  }

  return ''
})

const { copy, copied } = useClipboard({ source: reason })
const form = ref<'chose' | 'generate'>('chose')
</script>

<style lang="scss" module>
  .container {
    position: relative;
    overflow: hidden;
    border: 6px solid var(--border-color);
    border-radius: 12px;
    user-select: all;
    margin: 4px 0;
    font-weight: lighter;

    &::before, &::after {
      position: absolute;
      left: 0;
      right: 0;
      content: '';
      height: 24px;
      background: linear-gradient(var(--angle), rgba(0, 0, 0, 0) 0%, var(--main-background) 80%);
      pointer-events: none;
    }

    &::before {
      --angle: 180deg;
      bottom: -2px;
    }

    &::after {
      --angle: 0deg;
      top: -2px;
    }
  }

  .inner {
    height: 100px;
    overflow: auto;
    padding: 14px;
    border-radius: 12px;
  }


  .alert {
    user-select: none;
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    font-weight: 500;
    font-size: 1.2rem;
    pointer-events: none;

    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.4);
    }
  }
</style>
