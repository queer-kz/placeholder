<template>
  <a :href="`/download/${fileName}`" :download="fileName" v-text="title" />
</template>

<script setup>
defineProps(['fileName', 'title']);
</script>
