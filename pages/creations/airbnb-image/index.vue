<script setup lang="ts">
definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Airbnb Image',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Airbnb Image',
  description: 'A Playground for Motion (Framer Motion) driven interfaces with Nuxt.js',
})

const { $gsap } = useNuxtApp()

let h1Animation: gsap.core.Tween | null = null
let contentAnimation: gsap.core.Tween | null = null

onMounted(() => {
  h1Animation = $gsap.fromTo('h1', {
    opacity: 0,
    y: 20,
    duration: 0.6,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
  })

  contentAnimation = $gsap.from('.content p', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power1.out',
  })
})

onUnmounted(() => {
  h1Animation?.kill()
  contentAnimation?.kill()
})
</script>

<template>
  <section class="space-y-3.5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Airbnb Image
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <p class="max-w-xl">
        Recreated the Airbnb Image animation. Made in Nuxt, GSAP, Tailwind and inspired by <NuxtLink
          target="_blank"
          class="transition-colors hover:text-primary"
          to="https://x.com/imeronn"
        >
          <strong>@imeronn</strong></NuxtLink>.
      </p>
      <CreationsPostLinks
        post-link="https://x.com/vaunblu/status/1836041963843289285"
        original-link="https://x.com/imeronn/status/1798345509448618378"
      />
    </div>
  </section>
</template>
