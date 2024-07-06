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
    height: 62px;
    padding-top: 2px;
    margin-bottom: 12px;
    border-bottom: #777777 1px solid;
  }

  .logo {
    margin: 0 auto;
  }
</style>
