<template>
  <article :class="$style.container" :lang="props.lang">
    <img
      :src="props.poster"
      :alt="props.title"
      :class="$style.picture"
    />
    <a
      :href="props.href"
      :class="[$style.link, $style.title]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ props.title }}
    </a>
  </article>
</template>

<script lang="ts" setup>
  const props = defineProps({
    lang: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" module>
  .container {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    max-width: 300px;

    @media (max-width: 948px) {
      margin: 0 12px 6px 0;
    }
  }

  .picture {
    width: 100%;
    aspect-ratio: 1200 / 630;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 0 1px var(--border-color);
  }

  .title {
    margin-block-start: 10px;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;

    color: var(--text-color);
    text-decoration: none;
  }

  .link {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
