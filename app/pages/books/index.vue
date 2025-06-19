<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Books</h1>
    <ul>
      <li v-for="book in books" :key="book.path" class="mb-2">
        <NuxtLink :to="book.path" class="text-blue-600 hover:underline">
          {{ book.title}}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const { data: books } = await useAsyncData(route.path, () => {
  console.log("books route.path", route.path)
  return queryCollection('books').all()
  // console.log("books", c);
  // return c
})

</script>
