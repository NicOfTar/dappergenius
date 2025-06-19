<template>
  <div class="container mx-auto py-8">
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-3xl font-bold mb-4">{{ doc.title || doc._file }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
