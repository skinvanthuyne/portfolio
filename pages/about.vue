<template>
  <main class="py-16">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-8">About Me</h1>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-8 md:mb-0">
          <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VVw8OFzHDjIS9kZdn1N9CAHaMK%26pid%3DApi&sp=1729022969Tb7bba772e7501d40029027d0056eec82757ce1f3d07719667be7ea05a03c0486" alt="Your Name" class="rounded-full w-64 h-64 object-cover">
        </div>
        <div class="md:w-2/3 md:pl-8">
          <p class="text-xl mb-4">
            Hello! I'm [Your Name], a passionate web developer and designer with a keen eye for creating beautiful, functional websites.
          </p>
          <p class="mb-4">
            With [X] years of experience in the industry, I specialize in [Your Specialties]. I'm constantly learning and adapting to new technologies to deliver the best possible solutions for my clients.
          </p>
          <p>
            When I'm not coding, you can find me [Your Hobbies or Interests].
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.classList.add('visible');
        stop();
      }
    });
  });
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>