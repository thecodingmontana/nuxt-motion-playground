<script setup lang="ts">
definePageMeta({
  layout: 'templates',
})

useHead({
  titleTemplate: '%s - FlowGen',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Templates - FlowGen',
  description: 'A Playground for animation-driven interfaces with Nuxt.js and GSAP',
})
const image = 'https://images.unsplash.com/photo-1509099395498-a26c959ba0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

console.log(image)
</script>

<template>
  <main>
    Flow Gen
  </main>
</template>
