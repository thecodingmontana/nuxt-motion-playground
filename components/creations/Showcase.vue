<script setup lang="ts">
const { $gsap } = useNuxtApp()

let showcaseAnimation: gsap.core.Tween | null = null

onMounted(() => {
  showcaseAnimation = $gsap.from('.showcase', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.4,
    ease: 'power1.out',
  })
})

onUnmounted(() => {
  showcaseAnimation?.kill()
})
</script>

<template>
  <div class="showcase flex h-[338px] items-center justify-center bg-muted px-3.5 sm:rounded-[18px] sm:px-0">
    <slot />
  </div>
</template>
