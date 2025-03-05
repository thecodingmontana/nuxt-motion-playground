<script setup lang="ts">
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'
import TemplateCard from '~/components/templates/shared/TemplateCard.vue'
import { templates } from '~/types'

definePageMeta({
  layout: 'templates',
})

const { $gsap } = useNuxtApp()

let timeline: gsap.core.Timeline | null = null

onMounted(() => {
  timeline = $gsap.timeline({ paused: true })

  timeline
    .fromTo(
      '.title',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3 },
    )
    .fromTo(
      '.content p',
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 0.3, y: 0, ease: 'power1.out' },
      '-=0.3',
    )
    .fromTo(
      '.template',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power1.out', stagger: 0.3 },
      '-=0.2',
    )

  timeline.play()
})

onUnmounted(() => {
  timeline?.kill()
})
</script>

<template>
  <section class="min-h-screen relative overflow-hidden max-w-7xl mx-auto flex flex-col">
    <Header />
    <div class="flex-1 mt-10">
      <div class="content flex flex-col flex-1 items-center gap-5 sm:gap-10">
        <h1
          class="title font-medium text-center text-pretty dark:bg-gradient-to-b dark:from-white/90 to-black/30 bg-clip-text text-3xl dark:text-transparent lg:max-w-3xl lg:text-4xl"
        >
          Animated UI templates for NuxtJS, TailwindCSS and GSAP.
        </h1>
        <p class="max-w-md text-balance text-center text-muted-foreground">
          All of the templates are built with Vue on top of NuxtJS, styled with
          TailwindCSS, and leverage GSAP for smooth, addicting animations.
        </p>
      </div>
      <div class="grid grid-cols-3 mt-12 gap-5 items-center">
        <TemplateCard
          v-for="(template, index) in templates"
          :key="index"
          :template="template"
        />
      </div>
    </div>
    <Footer />
  </section>
</template>
