<template>
  <main class="py-16">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-8">My Skills</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-icon" :class="skill.icon"></div>
          <h3 class="text-xl font-semibold mt-4">{{ skill.name }}</h3>
          <p class="mt-2">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', icon: 'i-logos-vue', description: 'Building reactive user interfaces' },
  { name: 'Nuxt.js', icon: 'i-logos-nuxt-icon', description: 'Server-side rendering and static site generation' },
  { name: 'JavaScript', icon: 'i-logos-javascript', description: 'Core language for web development' },
  { name: 'TypeScript', icon: 'i-logos-typescript-icon', description: 'Type-safe JavaScript development' },
  { name: 'HTML5', icon: 'i-logos-html-5', description: 'Structuring web content' },
  { name: 'CSS3', icon: 'i-logos-css-3', description: 'Styling and layout' },
  { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', description: 'Utility-first CSS framework' },
  { name: 'Three.js', icon: 'i-logos-threejs', description: '3D graphics in the browser' },
  // Add more skills as needed
];
</script>

<style scoped>
.skill-card {
  @apply bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105;
}

.skill-icon {
  @apply text-4xl mb-4;
}
</style>