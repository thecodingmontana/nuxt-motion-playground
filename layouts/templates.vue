<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: `Templates` },
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
  title: `Templates`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Templates',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})
</script>

<template>
  <client-only>
    <slot />
  </client-only>
</template>
