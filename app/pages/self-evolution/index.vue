<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Self-Evolution</h1>
    <ul>
      <li v-for="entry in entries" :key="entry.path" class="mb-2">
        <NuxtLink :to="entry.path" class="text-blue-600 hover:underline">
          {{ entry.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const {data: entries} = await useAsyncData(route.path, () => {
  return queryCollection('selfEvolution').all()
})

if (!entries.value) {
  throw createError({ statusCode: 404, statusMessage: 'Self-Evolution not found', fatal: true })
}
</script>
