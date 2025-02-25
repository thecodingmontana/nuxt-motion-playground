<script setup lang="ts">
import { Button } from '../ui/button'

const { $gsap } = useNuxtApp()

const props = defineProps<{
  onRestart?: () => void
  isReplay: boolean
}>()

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
  <div class="showcase relative overflow-hidden flex h-[338px] items-center justify-center bg-muted rounded sm:rounded-[18px] sm:px-0">
    <Button
      v-if="props?.isReplay"
      size="icon"
      variant="ghost"
      class="absolute top-2 right-2 z-20 text-white rounded-full"
      @click="props?.onRestart"
    >
      <Icon
        name="solar:refresh-bold"
        class="size-6"
      />
    </Button>
    <slot />
  </div>
</template>
