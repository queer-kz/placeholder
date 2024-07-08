<template>
  <div :class="$style.container">
    <div :class="$style.mobileDivider">
      <span v-for="i in 3" :key="i" />
    </div>

    <!-- Пресса -->
    <section>
      <h2>
        <template v-if="route.name === 'en'">Press</template>
        <template v-else-if="route.name === 'lt'">Publikacijos</template>
        <template v-else>Пресса</template>
      </h2>

      <!-- Парни ПЛЮС -->
      <NewsItem
        lang="ru"
        title="В Казахстане прошло первое заседание по петиции против «ЛГБТ-пропаганды»"
        :poster="parniPlus"
        href="https://parniplus.com/news/kazakhstan-homophobic-petition-discussion/?utm_source=queer.kz"
      />

      <!-- Orda -->
      <NewsItem
        lang="ru"
        title="Рассылали и призывали подписывать: кто стоит за 50 тысячами голосов против ЛГБТ?"
        :poster="orda"
        href="https://orda.kz/rassylali-i-prizyvali-podpisyvat-kto-stoit-za-50-tysjachami-golosov-protiv-lgbt-387860/"
      />
    </section>

    <!-- Организации -->
    <section>
      <h2>
        <template v-if="route.name === 'en'">Organizations</template>
        <template v-else-if="route.name === 'lt'">Organizacijos</template>
        <template v-else>Организации</template>
      </h2>
      <OrganizationItem
        title="AmanBol"
        :poster="amanBol"
        href="https://amanbol.kz/?utm_source=queer.kz"
      />
      <OrganizationItem
        title="RSide"
        :poster="rside"
        href="https://www.instagram.com/r.side_astana/?utm_source=queer.kz"
      />
      <OrganizationItem
        title="Education Community"
        :poster="eduCommunity"
        href="https://www.instagram.com/edu.community.kz/?utm_source=queer.kz"
      />
      <OrganizationItem
        title="Feminita"
        :poster="feminita"
        href="https://taplink.cc/feminita?utm_source=queer.kz"
      />
    </section>

    <!-- Поделиться -->
    <section :class="$style.contact">
      <p v-if="route.name === 'en'">
        If you would like to share a publication in the media or be featured in the organizations section, please contact us on Telegram at <a href="https://t.me/queer_kz" target="_blank" rel= "noreferrer noopener">@queer_kz</a>.
      </p>
      <p v-else-if="route.name === 'lt'">
        Jei norite pasidalinti publikacija žiniasklaidoje arba būti patalpinti organizacijų skyriuje, susisiekite su mumis Telegram <a href="https://t.me/queer_kz" target="_blank" rel= "noreferrer noopener">@queer_kz</a>.
      </p>
      <p v-else>
        Если вы хотите поделиться публикацией в СМИ или разместиться в разделе организаций, свяжитесь с нами в Telegram <a href="https://t.me/queer_kz" target="_blank" rel="noreferrer noopener">@queer_kz</a>.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import orda from '~/assets/press/orda.jpg'
import parniPlus from '~/assets/press/parni-plus.png'
import amanBol from '~/assets/organizations/aman-bol.png'
import rside from '~/assets/organizations/rside.png'
import eduCommunity from '~/assets/organizations/edu-community.png'
import feminita from '~/assets/organizations/feminita.png'

// const route = useRoute()
const route = { name: 'ru' }
</script>

<style lang="scss" module>
  .container {
    display: block;
  }

  @media (max-width: 948px) {
    .mobileDivider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      span {
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: var(--divider-color);
        border-radius: 50%;
      }
    }
  }

  .contact {
    &::before {
      content: '';
      display: block;
      border-bottom: var(--divider-color) 1px solid;
      margin: 16px 0;
    }

    color: var(--second-text-color);
    
    a {
      color: var(--second-text-color);
      text-decoration: none;
      font-weight: 500;
    }
  }
</style>
