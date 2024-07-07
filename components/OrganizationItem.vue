<template>
  <article :class="$style.container">
    <img
      :src="props.poster"
      :alt="props.title"
      :class="$style.picture"
    />
    <a
      :href="props.href"
      :class="$style.link"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Перейти на сайт организации ${props.title}`"
    />
  </article>
</template>

<script lang="ts" setup>
  const props = defineProps({
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
    margin: 0 4px 4px 0;
  }

  .picture {
    width: 80px;
    aspect-ratio: 100 / 80;
    height: auto;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
