<script setup>
const title = "DapperGenius - Science Fiction and Mindfulness";
const description = "Explore the intersection of science fiction and mindfulness with DapperGenius. Dive into a world where futuristic narratives meet present-day awareness.";

useHead({
  meta: [
    { name: 'description', content: 'Science Fiction and Mindfulness' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo/favicon.png' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo/dapperlogo_publisher.png',
  twitterImage: '/logo/dapperlogo_publisher.png',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <div>
    <header>
      <!-- <template>
        <NuxtLink to="/">
          <img src="/logo/dapperbrand.svg" alt="DapperGenius Logo" width="50" height="50">
        </NuxtLink>
      </template> -->

    </header>

    <main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>

    <footer>
      <p>&copy; 2025 Troy Williams. All rights reserved.</p>
    </footer>
  </div>
</template>