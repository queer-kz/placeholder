<template>
  <!-- Title  -->
  <ContentSlot v-if="form === 'chose'" :use="$slots.choseTitle" />
  <ContentSlot v-if="form === 'fill'" :use="$slots.fillTitle" />

  <div :class="$style.container">
    <!-- Chose -->
    <div v-if="form === 'chose'">

      <!-- Fill -->
      <div :class="[$style.item, $style.itemFill]" @click="form = 'fill'">
        <slot name="fillVariant" />
      </div>

      <div :class="[$style.item, $style.itemDownload]" @click="download">
        <slot name="downloadVariant" />
      </div>
    </div>

    <!-- Fill -->
    <slot v-if="form === 'fill'" name="form" />

    <!-- Preload components -->
    <div :class="$style.hidden">
      <FormKit type="form" />
    </div>
  </div>
</template>


<script setup lang="ts">
import FileSaver from 'file-saver'

const form = ref<'chose' | 'generate'>('chose')
const props = defineProps(['downloadFileName']);

function download() {
  FileSaver.saveAs(`/download/${props.downloadFileName}`, props.downloadFileName)
}
</script>

<style>
@import url('@formkit/themes/genesis');
</style>

<style lang="scss" module>
  :global(:root) {
    --fk-color-primary: #e66199;

    @media (prefers-color-scheme: dark) {
      --fk-color-primary: var(--primary-color);
      --fk-color-help: var(--second-text-color);
      --fk-color-input: var(--text-color);
      --fk-color-icon: var(--second-text-color);
    }
  }

  .hidden {
    display: none;
  }

  .container {
    position: relative;
    display: block;
    min-height: 238px;
    border: 6px solid var(--border-color);
    border-radius: 12px;
    padding: 14px;
  }

  .item {
    max-width: 650px;
  }

  .itemFill {
    --color: #832373;
    --background-color: #8323730b;

    margin-bottom: 16px;

    @media (prefers-color-scheme: dark) {
      --color: #d527b8;
      --background-color: #d527b815;
    }
  }

  .itemDownload {
    --color: #1c274c;
    --background-color: #1c274c0b;

    @media (prefers-color-scheme: dark) {
      --color: #7c4dff;
      --background-color: #4400ff15;
    }
  }
</style>
