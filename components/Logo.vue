<template>
  <div :class="$style.container" role="img" aria-label="Queer.kz logo">
    <span :class="$style.img">
      <img src="~/assets/logo.png" alt="Логотип сайта Queer.kz: Веселый кот" />
    </span>

    <span :class="$style.inner">
      Queer.kz
    </span>
  </div>
</template>

<style lang="scss" module>
  .container {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    user-select: none;
    text-decoration: none;
    color: #000;
  }

  .inner {
    font-size: 22px;
    line-height: 22px;
    font-weight: 500;
  }

  .img {
    display: flex;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 32px;
    background-color: #FF93B3;

    img {
      border: none;
    }
  }
</style>
