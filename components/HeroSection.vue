<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="z-10 text-center">
      <h1 class="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p class="text-xl mb-8">Web Developer</p>
      <NuxtLink to="/contact" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get in Touch
      </NuxtLink>
    </div>
    <div ref="heroCanvas" class="absolute inset-0 z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const heroCanvas = ref(null);
let scene, camera, renderer, cube;

onMounted(() => {
  initThree();
  animate();
  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
});

function initThree() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  heroCanvas.value.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
</script>