<template>
  <main class="py-16">
    <article class="container mx-auto px-6 prose dark:prose-invert lg:prose-xl">
      <h1>{{ post.title }}</h1>
      <p class="text-gray-500">{{ formatDate(post.date) }}</p>
      <ContentRenderer :value="post" />
    </article>
  </main>
</template>

<script setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne());

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>