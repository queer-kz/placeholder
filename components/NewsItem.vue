<template>
  <article :class="$style.container">
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
    display: flex;
    flex-direction: column;
  }

  .picture {
    width: 100%;
    aspect-ratio: 1200 / 630;
    height: auto;
    border-radius: 8px;
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
