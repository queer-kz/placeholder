<template>
  <div :class="$style.container">
    <svg viewBox="0 0 20 20" :class="$style.icon">
      <path d="m0 0h20v20h-20z" fill="none"/>
      <path d="m11 7h-1.51c-.63 0-1.25.3-1.59.7l-.9-2.7h-2.87l-2.39 7h1.69l.74-2h2.83v4h-5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2zm-4.49 2h-2.02l1-2.93zm3.49-1h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2zm7.25 5v-1.08h-3.17v-2.17h-1.16v2.17h-3.17v1.08h1.28c.11.85.56 1.85 1.28 2.62-.87.36-1.89.62-2.31.62-.01.02.22.97.2 1.46.84 0 2.21-.5 3.28-1.15 1.09.65 2.48 1.15 3.34 1.15-.02-.49.2-1.44.2-1.46-.43 0-1.49-.27-2.38-.63.7-.77 1.14-1.77 1.25-2.61zm-3.81 1.93c-.5-.46-.85-1.13-1.01-1.93h2.09c-.17.8-.51 1.47-1 1.93l-.04.03s-.03-.02-.04-.03z"/>
    </svg>

    <NuxtLink to="/" lang="ru" v-if="route.name !== 'index'">по-русски</NuxtLink>
    <NuxtLink to="/en" lang="en" v-if="route.name !== 'en'">English</NuxtLink>
    <NuxtLink to="/lt" lang="lt" v-if="route.name !== 'lt'">Lietuviškai</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>


<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.7;
  font-size: 14px;

  a {
    display: block;
    color: #000;
    text-decoration: none;
    padding: 8px 6px;
  }
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
