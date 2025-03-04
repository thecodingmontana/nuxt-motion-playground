<script setup lang="ts">
import { Button } from '~/components/ui/button'

definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Flip Delete Button',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Flip Delete Button',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()

let timeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()

  timeline = $gsap.timeline({ paused: true })

  //   timeline
  //     .fromTo('.animate-text h2', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.6 })
  //     .fromTo('.animate-text div p', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' })
  //     .fromTo('.animate-text div button', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' })
  //     .fromTo(
  //       '.grid .industrial, .grid .industrial img, .grid .commercial, .grid .commercial img, .grid .residential, .grid .residential img',
  //       { scaleY: 0, transformOrigin: 'bottom' },
  //       { scaleY: 1, duration: 1.2, ease: 'power2.out', stagger: 0.2, delay: 0.5 },
  //     )
  //     .call(() => {
  //       $gsap.to('.grid .industrial div, .grid .commercial div, .grid .residential div', {
  //         opacity: 1,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //       })
  //     })

  timeline.play()
})

const onRestartAnimation = () => {
  timeline?.restart()
}

onUnmounted(() => {
  timeline?.kill()
})
</script>

<template>
  <section class="space-y-5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Flip Delete Button
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <CreationsPostLinks
        post-link="https://x.com/codewithmontana/status/1895358257629376807"
      />
    </div>
    <CreationsShowcase
      :is-replay="true"
      class="h-[45vh] sm:h-[450px] overflow-y-scroll sm:overflow-hidden"
      button-class="text-black dark:text-white"
      @restart="onRestartAnimation"
    >
      <Button>
        Hello
      </Button>
    </CreationsShowcase>
  </section>
</template>
