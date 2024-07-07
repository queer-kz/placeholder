<template>
  <article :class="$style.container" :lang="props.lang">
    <img
      :src="props.poster"
      :alt="props.title"
      :class="$style.picture"
    />
    <h4 :class="$style.title">
      {{ props.title }}
    </h4>
    <a
      :href="props.href"
      :class="$style.link"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Читать новость: ${props.title} на сайте`"
    />
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
    margin: 0 12px 12px 0;
  }

  .picture {
    width: 100%;
    aspect-ratio: 1200 / 630;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 0 1px var(--border-color);
  }

  .title {
    margin-top: 10px;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
