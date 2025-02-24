<script setup lang="ts">
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'
import ModalProvider from '~/providers/ModalProvider.vue'

useHead({
  meta: [
    { property: 'og:title', content: `Creations` },
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
  title: `Creations`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})
</script>

<template>
  <main class="min-h-screen relative overflow-hidden max-w-7xl mx-auto flex flex-col">
    <Header />
    <CreationsMobileMenu />
    <ModalProvider />
    <div class="mt-9 flex flex-1 gap-x-9 lg:px-9">
      <CreationsSidebar />
      <main class="mx-auto mb-36 flex max-w-screen-md flex-1 flex-col space-y-9 px-3.5 lg:max-w-none">
        <slot />
      </main>
    </div>
    <Footer />
  </main>
</template>
