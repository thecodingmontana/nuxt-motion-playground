<script setup lang="ts">
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

const isLoading = ref(false)
let animationTimeout: ReturnType<typeof setTimeout> | null = null

onMounted(async () => {
  isLoading.value = true
  await nextTick()

  timeline = $gsap.timeline({ paused: true })

  timeline
    .fromTo('.bottom-left', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 })
    .fromTo('.bigger-img', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'cubicBezier(0.6, 0.01, -0.5, 0.95)' })
    .fromTo('.top-right', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'cubicBezier(0.6, 0.01, -0.5, 0.95)' })
    .fromTo('.bottom-right', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'cubicBezier(0.6, 0.01, -0.5, 0.95)' })
    .fromTo('.top-left', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 0.3, ease: 'cubicBezier(0.6, 0.01, -0.5, 0.95)' })

  animationTimeout = setTimeout(() => {
    isLoading.value = false
  }, 3500)

  timeline.play()
})

const onRestartAnimation = () => {
  if (!timeline) return

  timeline
    .to('.bigger-img', { opacity: 0, y: 20, duration: 0.3, ease: 'power1.in' })
    .to('.top-left, .top-right, .bottom-left, .bottom-right', { opacity: 0, y: 20, duration: 0.3, ease: 'power1.in' }, '<')
    .add(() => {
      isLoading.value = true
    })
    .set('.bigger-img, .top-left, .top-right, .bottom-left, .bottom-right', { opacity: 0, y: 20 }) // Reset position
    .add(() => {
      isLoading.value = false
      timeline?.restart()
    })
}

onUnmounted(() => {
  timeline?.kill()
  if (animationTimeout) clearTimeout(animationTimeout)
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
      <!-- <div
        v-if="isLoading"
        class="w-full h-full p-10 relative"
      >
        <div class="h-[16rem] top-left w-[12rem] absolute top-3">
          <NuxtImg
            src="https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[16rem] top-right w-[12rem] absolute top-7 right-10">
          <NuxtImg
            src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[18rem] bigger-img w-[26rem] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <NuxtImg
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[8rem] bottom-left w-[17rem] absolute bottom-7">
          <NuxtImg
            src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[8rem] bottom-right w-[17rem] absolute bottom-3 right-16 z-20">
          <NuxtImg
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
      </div> -->
      <div
        class="w-full h-full p-10 relative"
      >
        <div class="flex items-center justify-between">
          <h1 class="font-semibold">
            Ollie
          </h1>
          <ul class="flex items-center gap-x-4">
            <li>
              <NuxtLink to="#">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">
                Why work with us?
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink
            to="#"
            class="underline underline-offset-4 decoration-muted-foreground"
          >
            Let's work together
          </NuxtLink>
        </div>
        <div class="mt-10 space-y-3">
          <div class="flex items-center justify-between w-full">
            <h2 class="text-6xl font-semibold">
              Brand
            </h2>
            <p class="max-w-xs text-balance text-sm text-muted-foreground">
              We are specialised in setting up the foundation of your brand  ans setting you up for success.
            </p>
          </div>
          <h2 class="text-6xl font-semibold">
            Experience
          </h2>
        </div>
        <h2 class="absolute bottom-[32.5%] text-center text-6xl font-semibold left-0 right-0 z-20">
          Studio
        </h2>
        <div class="h-[18rem] max-w-[90%] z-10 absolute -bottom-[25%] left-0 right-0 mx-auto">
          <NuxtImg
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="office space"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </CreationsShowcase>
  </section>
</template>
