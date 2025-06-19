<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
<div class="container mx-auto py-8">
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</div>
</template>
