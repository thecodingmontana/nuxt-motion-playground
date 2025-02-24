<script setup lang="ts">
const props = defineProps<{
  postLink: string
  originalLink?: string
}>()

const { $gsap } = useNuxtApp()
let animation: gsap.core.Tween | null = null

onMounted(() => {
  animation = $gsap.from('.links', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power1.out',
    delay: 0.2,
  })
})

onUnmounted(() => {
  if (animation) animation.kill()
})
</script>

<template>
  <div class="links flex items-center gap-3.5 px-3.5 sm:px-0">
    <NuxtLink
      target="_blank"
      :to="props.postLink"
    >
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 group"
      >
        View
        post
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </NuxtLink>
    <NuxtLink
      v-if="props?.originalLink"
      target="_blank"
      :to="props.originalLink"
    >
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 group"
      >
        Original
        design post
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </NuxtLink>
  </div>
</template>
