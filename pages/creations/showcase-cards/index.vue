<script setup lang="ts">
import { cn } from '@/lib/utils'

definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Showcase Cards',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Showcase Cards',
  description: 'A Playground for animation-driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()

const images = ref([
  {
    src: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/odVlTMqPPiMksmxpN9cCbPCjUPP.jpg',
    alt: 'Solo Leveling',
    bottom: '-100px',
    zIndex: 4,
  },
  {
    src: 'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/7zvIJoH6M7JOphWebgBM2bHFIV9.jpg',
    alt: 'Demon Slayer',
    bottom: '-60px',
    zIndex: 3,
  },
  {
    src: 'https://media.themoviedb.org/t/p/w1000_and_h563_face/62sXjJ60TiEZReoy6oohECsNafR.jpg',
    alt: 'One Piece',
    bottom: '-20px',
    zIndex: 2,
  },
  {
    src: 'https://image.tmdb.org/t/p/original/nIHp6fz2MX33blJKYa9BSbhct7W.jpg',
    alt: 'Jujutsu Kaisen',
    bottom: '20px',
    zIndex: 1,
  },
])

const onMouseHover = (imgIndex: number) => {
  $gsap.to(`#manga-backdrop-${imgIndex}`, {
    y: -50,
    duration: 0.8,
    rotate: 5,
  })
}

const onMouseLeave = (imgIndex: number) => {
  $gsap.to(`#manga-backdrop-${imgIndex}`, {
    y: 0,
    duration: 0.8,
    delay: 0.2,
    rotate: 0,
  })
}

const removePx = (value: string | number): number => {
  if (typeof value === 'number') return value
  return parseInt(value.replace('px', ''), 10) || 0
}

const onSelectCard = (imgIndex: number, currentBottom: string) => {
  const bottom = removePx(currentBottom)
  $gsap.to(`#manga-backdrop-${imgIndex}`, {
    y: bottom - 300,
    duration: 0.8,
    delay: 0.2,
    rotate: 0,
  })
}
</script>

<template>
  <section class="space-y-5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Showcase Cards
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <p class="max-w-xl">
        Anime movie poster showcase.
      </p>
      <CreationsPostLinks
        post-link="https://x.com/codewithmontana/status/1894067279656006006"
      />
    </div>
    <CreationsShowcase class="relative h-[500px]">
      <div
        v-for="(img, index) in images"
        :id="`manga-backdrop-${index}`"
        :key="index"
        :class="cn(
          'w-[17.5rem] sm:w-[25rem] cursor-pointer absolute left-0 right-0 mx-auto rounded-md overflow-clip before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70',
        )"
        :style="{
          bottom: img.bottom,
          zIndex: img.zIndex,
        }"
        @mouseenter="onMouseHover(index)"
        @mouseleave="onMouseLeave(index)"
        @click="onSelectCard(index, img.bottom)"
      >
        <NuxtImg
          :src="img.src"
          :alt="img.alt"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-0 grid place-content-center min-h-full inset-x-0 z-10">
          <div class="flex flex-col items-center">
            <Icon
              name="hugeicons:play-circle"
              class="size-[5.5rem] text-white"
            />
            <p class="text-white text-xl font-semibold">
              {{ img.alt }}
            </p>
          </div>
        </div>
      </div>
    </CreationsShowcase>
  </section>
</template>
