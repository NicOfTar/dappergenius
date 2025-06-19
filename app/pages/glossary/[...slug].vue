<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">{{ doc?.title }}</h1>
    <ContentRenderer v-if="doc" :value="doc" />
  </div>
</template>


<script setup>
const route = useRoute()
const { data: doc } = await useAsyncData('glossary-' + route.path, () => {
  return queryCollection('glossary').path(route.path).first()
})
</script>
