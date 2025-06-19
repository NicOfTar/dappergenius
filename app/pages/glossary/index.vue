<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Glossary</h1>
    <ul>
      <li v-for="entry in entries" :key="entry._path" class="mb-2">
        <NuxtLink :to="entry._path" class="text-blue-600 hover:underline">
          {{ entry.title || entry._file }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { queryContent } from '#content';
const { data: entries } = await useAsyncData('glossary', () =>
  queryContent('/glossary').sort({ title: 1 }).find()
)
</script>
