<template>
  <a :href="src" download="queer-banner.png" :class="$style.item" :lang="lang">
    <img :src="src" :alt="title" :class="$style.preview" />
    <span :class="$style.title">{{ title }}</span>
  </a>
</template>

<script lang="ts" setup>
import ogHomeRu from '~/assets/social/og:home:ru.png'
import ogHomeLt from '~/assets/social/og:home:lt.png'
import ogHomeEn from '~/assets/social/og:home:en.png'
import ogPetitionRu from '~/assets/social/og:petition:ru.png'
import shareAvatar from '~/assets/social/share:avatar.png'
import shareLogo from '~/assets/social/share:logo.png'
import storyHomeRu from '~/assets/social/story:home:ru.png'
import storyPetitionRu from '~/assets/social/story:petition:ru.png'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
})

const src = computed(() => {
  switch (props.slug) {
    case 'og:home:ru':
      return ogHomeRu
    case 'og:home:lt':
      return ogHomeLt
    case 'og:home:en':
      return ogHomeEn
    case 'og:petition:ru':
      return ogPetitionRu
    case 'share:avatar':
      return shareAvatar
    case 'share:logo':
      return shareLogo
    case 'story:home:ru':
      return storyHomeRu
    case 'story:petition:ru':
      return storyPetitionRu
    default:
      throw new Error("Unknown slug");
  }
})
</script>

<style lang="scss" module>
.item {
  display: inline-flex;
  flex-direction: column;
  margin: 0 1rem 1rem 0;
  text-decoration: none;
  color: var(--text-color);
  
  .preview {
    width: 180px;
    border: 4px solid var(--border-color);
    background-color: #fff;
    border-radius: 6px;
  }

  .title {
    display: block;
    width: 180px;
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 500;
  }
}
</style>
