<script setup lang="ts">
definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Introductions',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Introductions',
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
  <section class="space-y-3.5">
    <h1 class="text-2xl font-semibold">
      Introduction
    </h1>
    <div class="content space-y-3 max-w-2xl">
      <p class="text-muted-foreground">
        Hey there! I'm <NuxtLink><strong>@thecodingmontana</strong></NuxtLink>. This is where I share and experiment animations and bring interfaces to life.✨
      </p>
      <p class="text-muted-foreground">
        Explore my creations via the Menu (Sidebar) 📂, and if something sparks your interest, don’t hesitate to explore and connect! 🚀
      </p>
    </div>
  </section>
</template>
