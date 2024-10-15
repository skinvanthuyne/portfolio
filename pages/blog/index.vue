<template>
  <main class="py-16">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-8">Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post._path" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <NuxtLink :to="post._path">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.description }}</p>
              <span class="text-sm text-gray-500">{{ formatDate(post.date) }}</span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').sort({ date: -1 }).find());

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>