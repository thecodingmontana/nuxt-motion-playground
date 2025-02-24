<script setup lang="ts">
import AirbnbImage from '~/components/creations/airbnb-image/AirbnbImage.vue'
import type { AirbnbImage as TypeAirbnbImage } from '~/types'

definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Airbnb Image',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Airbnb Image',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()

let h1Animation: gsap.core.Tween | null = null
let contentAnimation: gsap.core.Tween | null = null

const images = ref<TypeAirbnbImage[]>([
  {
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-2810308/original/a653d85a-1a97-45d7-a213-78ef2286122a.jpeg?im_w=720',
    alt: 'Tree',
    rotate: 10,
  },
  {
    src: 'https://a0.muscache.com/im/pictures/2cc58022-2004-4034-a281-22fb622e7461.jpg?im_w=720',
    alt: 'Tree',
    rotate: -20,
  },
  {
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-37988614/original/03d8ff60-c345-45ad-8aab-5c8f3cb5b1cd.jpeg?im_w=720',
    alt: 'Tree',
    rotate: -5,
  },
  {
    src: 'https://a0.muscache.com/im/pictures/26726bc5-6c5d-48f1-8767-f98021ed4abb.jpg?im_w=720',
    alt: 'Tree',
    rotate: 5,
  },
  {
    src: 'https://a0.muscache.com/im/pictures/0893e628-5d4b-4bd6-880d-870961618445.jpg?im_w=720',
    alt: 'Tree',
    rotate: -2,
  },
])

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
  <section class="space-y-5 px-3.5 sm:px-0">
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
    <CreationsShowcase>
      <div class="flex flex-row items-center justify-center p-4 relative'">
        <AirbnbImage
          v-for="(img, index) in images"
          ref="imgRefs"
          :key="index"
          :image="img"
          :index="index"
        />
      </div>
    </CreationsShowcase>
  </section>
</template>
