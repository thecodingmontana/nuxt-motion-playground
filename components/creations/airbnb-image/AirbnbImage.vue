<script setup lang="ts">
import type { AirbnbImage } from '~/types'

const props = defineProps<{
  image: AirbnbImage
  index: number
}>()

const { $gsap } = useNuxtApp()

let imgRefsAnimation: gsap.core.Tween | null = null

onMounted(async () => {
  imgRefsAnimation = $gsap.fromTo(`#airbnb-img-${props?.index}`, {
    scale: 0,
  }, {
    rotate: props.image.rotate,
    scale: 1,
    delay: props?.index * 1,
    stagger: {
      each: 0.1,
      from: 'start',
    },
  })
})

onUnmounted(() => {
  imgRefsAnimation?.kill()
})
</script>

<template>
  <NuxtImg
    :id="`airbnb-img-${props?.index}`"
    :src="props.image.src"
    :alt="props.image.alt"
    class="size-12 flex-shrink-0 sm:size-24 border-2 border-gray-100 rounded-lg -m-3 shadow-lg"
  />
</template>
