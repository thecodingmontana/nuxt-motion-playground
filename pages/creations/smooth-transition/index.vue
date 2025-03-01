<script setup lang="ts">
import { Button } from '~/components/ui/button'

definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Smooth Transition',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Smooth Transition',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()

let timeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()

  timeline = $gsap.timeline({ paused: true })

  timeline
    .fromTo('.animate-text h2', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.6 })
    .fromTo('.animate-text div p', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' })
    .fromTo('.animate-text div button', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' })
    .fromTo(
      '.grid .industrial, .grid .industrial img, .grid .commercial, .grid .commercial img, .grid .residential, .grid .residential img',
      { scaleY: 0, transformOrigin: 'bottom' },
      { scaleY: 1, duration: 1.2, ease: 'power2.out', stagger: 0.2, delay: 0.5 },
    )
    .call(() => {
      $gsap.to('.grid .industrial div, .grid .commercial div, .grid .residential div', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
    })

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
      Smooth Transition
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
      <div class="w-full h-full p-10 space-y-8">
        <div class="space-y-3 animate-text">
          <h2 class="text-3xl font-semibold">
            Delivering quality workmanship
          </h2>
          <div class="flex items-center justify-between">
            <p class="text-muted-foreground max-w-[27rem]">
              Delivering exceptional plumbing solutions that save you time, money, and worry.
            </p>
            <Button
              type="button"
              class="rounded-full px-6 bg-purple-600 dark:text-white hover:bg-purple-500 drop-shadow-md shadow-md"
            >
              Get a quote
            </Button>
          </div>
        </div>
        <div class="grid grid-cols-1 pb-5 sm:pb-0 sm:grid-cols-3 items-center gap-4">
          <div class="residential flex-shrink-0 overflow-clip rounded h-[15.5rem] relative">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent z-10" />
            <div class="absolute inset-0 flex items-center justify-center z-20 p-5">
              <p class="text-white font-semibold text-balance text-2xl text-center">
                Residential <br> Plumbing
              </p>
            </div>
            <NuxtImg
              class="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/high-angle-woman-working-as-plumber_23-2150746388.jpg?t=st=1740648246~exp=1740651846~hmac=efef4cf4cdbde5a154d0eef78a38c797a1f1d9360d6904d1ba21bcf2b971fcb9&w=740"
            />
          </div>
          <div class="commercial flex-shrink-0 overflow-clip rounded h-[15.5rem] relative">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent z-10" />
            <div class="absolute inset-0 flex items-center justify-center z-20 p-5">
              <p class="text-white font-semibold text-balance text-2xl text-center">
                Commercial <br> Plumbing
              </p>
            </div>
            <NuxtImg
              class="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-135.jpg?t=st=1740648892~exp=1740652492~hmac=125d9dd99bf9e2879bec6f2d852e7ee5d1424e1712fdd62258a3ad30e588c84c&w=1060"
            />
          </div>
          <div class="industrial flex-shrink-0 overflow-clip rounded h-[15.5rem] relative">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent z-10" />
            <div class="absolute inset-0 flex items-center justify-center z-20 p-5">
              <p class="text-white font-semibold text-balance text-2xl text-center">
                Industrial <br> Plumbing
              </p>
            </div>
            <NuxtImg
              class="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/professional-calibrating-vacuum-pump_482257-96228.jpg?t=st=1740648935~exp=1740652535~hmac=50bf4d78bbbe28b7f56f9031c53bfdd107179d89120b0409cb5ac677b6872ac9&w=1380"
            />
          </div>
        </div>
      </div>
    </CreationsShowcase>
  </section>
</template>
