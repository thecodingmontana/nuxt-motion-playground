<script setup lang="ts">
definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Bouncy Cards',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Bouncy Cards',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()

const topImages = ref([
  { src: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop&q=60', alt: 'Sculpture' },
  { src: 'https://images.unsplash.com/photo-1613871232466-cbb8285dffb6?w=600&auto=format&fit=crop&q=60', alt: 'Digital Orca' },
  { src: 'https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?w=600&auto=format&fit=crop&q=60', alt: 'Portery' },
  { src: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&auto=format&fit=crop&q=60', alt: 'Wadi Rum Village' },
  { src: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&auto=format&fit=crop&q=60', alt: 'Render' },
  { src: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop&q=60', alt: 'Sculpture' },
  { src: 'https://images.unsplash.com/photo-1613871232466-cbb8285dffb6?w=600&auto=format&fit=crop&q=60', alt: 'Digital Orca' },
  { src: 'https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?w=600&auto=format&fit=crop&q=60', alt: 'Portery' },
  { src: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&auto=format&fit=crop&q=60', alt: 'Wadi Rum Village' },
  { src: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&auto=format&fit=crop&q=60', alt: 'Render' },
  { src: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop&q=60', alt: 'Sculpture' },
  { src: 'https://images.unsplash.com/photo-1613871232466-cbb8285dffb6?w=600&auto=format&fit=crop&q=60', alt: 'Digital Orca' },
  { src: 'https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?w=600&auto=format&fit=crop&q=60', alt: 'Portery' },
  { src: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&auto=format&fit=crop&q=60', alt: 'Wadi Rum Village' },
  { src: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&auto=format&fit=crop&q=60', alt: 'Render' },
  { src: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop&q=60', alt: 'Sculpture' },
  { src: 'https://images.unsplash.com/photo-1613871232466-cbb8285dffb6?w=600&auto=format&fit=crop&q=60', alt: 'Digital Orca' },
  { src: 'https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?w=600&auto=format&fit=crop&q=60', alt: 'Portery' },
  { src: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&auto=format&fit=crop&q=60', alt: 'Wadi Rum Village' },
  { src: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&auto=format&fit=crop&q=60', alt: 'Render' },
])

// Create a duplicate set for the seamless loop
const allImages = ref([...topImages.value, ...topImages.value])

let timeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()
  timeline = $gsap.timeline({ paused: true })

  // Create the horizontal scrolling marquee effect
  $gsap.to('.marquee-container', {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: 'linear',
  })

  // Create the smooth wavy animation for each item
  // Each item moves up and down in a sine wave, but remains in its horizontal position
  const waveItems = document.querySelectorAll('.marquee-item')
  waveItems.forEach((item, i) => {
    $gsap.to(item, {
      y: i => 15 * Math.sin(i * 0.5 + 1), // Smooth sine wave pattern
      duration: 2 + (i % 4) * 3, // Slightly varied durations for natural feel
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  timeline.play()
})

onUnmounted(() => {
  timeline?.kill()
})
</script>

<template>
  <section class="space-y-5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Bouncy Cards
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <CreationsPostLinks post-link="https://x.com/codewithmontana/status/1894337850620903439" />
    </div>
    <CreationsShowcase
      :is-replay="true"
      class="h-[450px]"
    >
      <div class="marquee-container flex whitespace-nowrap absolute top-0 p-5 left-0 right-0">
        <!-- Inner container that moves -->
        <div class="flex items-center space-x-6 flex-nowrap">
          <div
            v-for="(img, index) in allImages"
            :key="index"
            class="size-12 marquee-item rounded-md flex-shrink-0 overflow-hidden"
          >
            <NuxtImg
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="text-center grid gap-3 mt-24">
        <h2 class="text-3xl sm:text-5xl font-semibold">
          You will find yourself <br> among us
        </h2>
        <p class="text-sm text-muted-foreground">
          Dive into a dynamic community where artists and buyers seamlessly merge.
        </p>
      </div>
    </CreationsShowcase>
  </section>
</template>
