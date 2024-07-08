<template>
  <ContentRenderer :value="page" v-if="page">
    <ContentRendererMarkdown :value="page" />
  </ContentRenderer>
</template>

<script lang="ts" setup>
const page = useCurrentPage()

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Страница не найдена'
  })
}

useOpenGraph();
</script>
