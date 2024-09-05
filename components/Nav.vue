<template>
  <nav :class="$style.container" lang="ru">
    <NuxtLink :class="$style.logo" to="/">
      <Logo />
    </NuxtLink>
  </nav>
</template>

<style lang="scss" module>
  .container {
    display: flex;
    align-items: center;
    height: 128px;
    padding-top: 2px;
    margin-bottom: 36px;
    border-bottom: var(--divider-color) 0px solid;
  }

  .logo {
    margin: 0 auto;
  }
</style>
