<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: `Nuxt Motion Playground` },
    {
      name: 'description',
      content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js',
    },
    {
      property: 'og:description',
      content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js',
    },
    { property: 'og:url', content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js' },
    { name: 'twitter:title', content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js' },
    {
      name: 'twitter:description',
      content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js',
    },
    { name: 'twitter:site', content: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js' },
  ],
  title: `Nuxt Motion Playground`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Nuxt Motion Playground',
  description: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js',
})
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#faf7f2] dark:bg-background xl:overflow-visible">
    <AppHeader />
    <slot />
    <AppFooter />
  </main>
</template>