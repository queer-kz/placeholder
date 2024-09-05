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
    color: var(--text-color);
    margin-top: 60px;
  }

  .inner {
    font-size: 22px;
    line-height: 22px;
    font-weight: 500;

    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .img {
    display: flex;
    width: 128px;
    height: 128px;
    overflow: hidden;

    img {
      border: none;
    }
  }
</style>
