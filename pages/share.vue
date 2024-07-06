<template>
  <div>
    <h1>Материалы для соц. сетей</h1>

    <p>{{ description }}</p>

    <h2>Баннер</h2>

    <a :href="ogRu" download="queer-banner.png" :class="$style.item" lang="ru">
      <img :src="ogRu" alt="Баннер (инициатива)" />
      <span :class="$style.title">Инициатива</span>
    </a>

    <a :href="ogPetition" download="queer-banner-petition.png" :class="$style.item" lang="ru">
      <img :src="ogPetition" alt="Баннер (петиция)" />
      <span :class="$style.title">Петиция</span>
    </a>

    <a :href="ogEn" download="queer-banner-en.png" :class="$style.item" lang="en">
      <img :src="ogEn" alt="Banner (petition, en)" />
      <span :class="$style.title">Petition (en)</span>
    </a>

    <a :href="ogLt" download="queer-banner-lt.png" :class="$style.item" lang="lt">
      <img :src="ogLt" alt="Banner (peticija, lt)" />
      <span :class="$style.title">Peticija (lt)</span>
    </a>

    <h2>Instagram истории</h2>
      
    <a :href="storyRu" download="queer-story.png" :class="$style.item" lang="ru">
      <img :src="storyRu" alt="Instagram история (инициатива)" />
      <span :class="$style.title">Инициатива</span>
    </a>

    <a :href="storyPetition" download="queer-story-petition.png" :class="$style.item" lang="ru">
      <img :src="storyPetition" alt="Instagram история (петиция)" />
      <span :class="$style.title">Петиция</span>
    </a>

    <h2>Логотип</h2>

    <a :href="avatar" download="queer-avatar.png" :class="$style.item" lang="ru">
      <img :src="avatar" alt="Аватар" />
      <span :class="$style.title">Аватар</span>
    </a>

    <a :href="logo" download="queer-logo.png" :class="$style.item" lang="ru">
      <img :src="logo" alt="Логотип" />
      <span :class="$style.title">Логотип</span>
    </a>

  </div>
</template>

<script lang="ts" setup>
import ogRu from '~/assets/social/og-ru.png'
import ogEn from '~/assets/social/og-en.png'
import ogLt from '~/assets/social/og-lt.png'
import ogPetition from '~/assets/social/og-petition.png'
import storyRu from '~/assets/social/story-ru.png'
import storyPetition from '~/assets/social/story-petition.png'
import avatar from '~/assets/social/avatar.png'
import logo from '~/assets/social/logo.png'

const title = 'Материалы для соц. сетей'
const description = 'Мы подготовили материалы, которые вы можете использовать для поддержки и распространения инициативы.'

const ogUrl = `https://queer.kz${ogRu.replace('https://queer.kz', '')}`;

useHead({
  title,
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://queer.kz/share'
    },
  ],
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: ogUrl,
    },

    // Twitter
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:domain',
      content: 'queer.kz',
    },
    {
      property: 'twitter:url',
      content: 'https://queer.kz/share'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: ogUrl,
    }
  ]
})
</script>

<style lang="scss" module>
.item {
  display: inline-flex;
  flex-direction: column;
  margin: 0 1rem 1rem 0;
  text-decoration: none;
  color: #000;

  img {
    width: 180px;
    border: 4px solid #f0f0f0;
    border-radius: 6px;
  }

  .title {
    font-size: 1rem;
    margin-top: 4px;
    font-weight: 500;
  }
}
</style>
