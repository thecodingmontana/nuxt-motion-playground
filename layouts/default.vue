<script setup lang="ts">
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'

useHead({
  meta: [
    { property: 'og:title', content: `Nuxt Motion Playground` },
    {
      name: 'description',
      content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
    },
    {
      property: 'og:description',
      content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
    },
    { property: 'og:url', content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP' },
    { name: 'twitter:title', content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP' },
    {
      name: 'twitter:description',
      content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
    },
    { name: 'twitter:site', content: 'A Playground for animation driven interfaces with Nuxt.js and GSAP' },
  ],
  title: `Nuxt Motion Playground`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Nuxt Motion Playground',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})
</script>

<template>
  <main class="min-h-screen relative overflow-hidden max-w-7xl mx-auto flex flex-col">
    <Header />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </main>
</template>
