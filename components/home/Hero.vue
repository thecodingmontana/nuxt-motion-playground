<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { animate, inView } from 'motion'

onMounted(() => {
  inView('#logos', (element) => {
    animate(element, { scale: 1.2, opacity: 0, y: 0 }, { duration: 0.5 })
  })
})
</script>

<template>
  <section class="px-4 py-4 sm:px-6 lg:px-8 sm:py-12 space-y-5">
    <div
      id="logos"
      class="flex items-center justify-center gap-3"
    >
      <NuxtLink
        to="https://nuxt.com"
        target="_blank"
      >
        <Icon
          name="logos:nuxt-icon"
          class="size-16"
        />
      </NuxtLink>
      <Plus />
      <NuxtLink
        to="https://motion.dev"
        target="_blank"
      >
        <Icon
          name="logos:framer"
          class="size-12"
        />
      </NuxtLink>
    </div>
    <h1 class="text-xl font-bold text-neutral-950 dark:text-neutral-200">
      Nuxt Motion Playground
    </h1>
    <div class="space-y-4">
      <p>Hey 👋! Welcome to <strong>Nuxt Motion Playground</strong>.</p>
      <p>
        I’m <strong>@thecodingmontana</strong>, and for the longest time, I hesitated to add animations to my websites and web apps.
        They always felt like an afterthought—something complex that I could avoid. But recently, I’ve developed a strong interest
        in animations and their ability to make interfaces feel dynamic and engaging.
      </p>
      <p>
        That’s why I created <strong>Nuxt Motion Playground</strong>—a space where I experiment with motion and bring interfaces to life.
        If you prefer an existing Vue package, you can check out <NuxtLink
          to="https://motion.unovue.com"
          target="_blank"
        ><strong>Motion Vue</strong></NuxtLink>.
        I’ve chosen to work directly with <NuxtLink
          to="https://motion.dev"
          target="_blank"
        ><strong>Motion</strong></NuxtLink> (Framer Motion) itself,
        without relying on any wrapper packages. This allows me to fully understand and control the animation logic while integrating
        it seamlessly into my Nuxt projects.
      </p>
      <p>
        If you're curious about building smooth, powerful animations in Vue without dependencies, join me in this journey.
        Welcome to <strong>Nuxt Motion Playground</strong>—where we bring motion to life, one experiment at a time! 🚀
      </p>
    </div>
  </section>
</template>
