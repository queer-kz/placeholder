<template>
  <div :class="$style.container">
    <div :class="$style.mobileDivider">
      <span v-for="i in 3" :key="i" />
    </div>

    <!-- Пресса -->
    <section>
      <h2>Пресса</h2>

      <!-- Orda -->
      <NewsItem
        title="Рассылали и призывали подписывать: кто стоит за 50 тысячами голосов против ЛГБТ?"
        :poster="orda"
        href="https://orda.kz/rassylali-i-prizyvali-podpisyvat-kto-stoit-za-50-tysjachami-golosov-protiv-lgbt-387860/"
      />
    </section>

    <!-- Организации -->
    <section>
      <h2>Организации</h2>
      <OrganizationItem
        title="AmanBol"
        :poster="amanBol"
        href="https://amanbol.kz/?utm_source=queer.kz"
      />
    </section>

    <!-- Поделиться -->
    <section :class="$style.contact">
      <p>Если вы хотите поделиться публикацией в СМИ или разместиться в разделе организаций, свяжитесь с нами в Telegram <a href="https://t.me/queer_kz" target="_blank" rel="noreferrer noopener">@queer_kz</a>.</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import orda from '~/assets/press/orda.jpg'
import amanBol from '~/assets/organizations/aman-bol.png'
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
        background-color: #000;
        border-radius: 50%;
      }
    }
  }

  .contact {
    &::before {
      content: '';
      display: block;
      border-bottom: #777777 1px solid;
      margin: 16px 0;
    }

    color: #777777;
    
    a {
      color: #777777;
      text-decoration: none;
      font-weight: 500;
    }
  }
</style>
