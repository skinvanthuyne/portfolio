<template>
  <header class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
    <nav class="container mx-auto px-6 py-3">
      <ul class="flex justify-between items-center">
        <li><NuxtLink to="/" class="text-xl font-bold">Portfolio</NuxtLink></li>
        <li>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink></li>
            <li><NuxtLink to="/skills" class="hover:text-blue-500">Skills</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-blue-500">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-500">Contact</NuxtLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>