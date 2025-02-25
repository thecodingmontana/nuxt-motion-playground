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

let timeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()
  splitText('.animate-text h2')
  splitText('.animate-text p')

  timeline = $gsap.timeline({ paused: true })

  timeline
    .fromTo('.zoomImg', { scale: 2, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 5, ease: 'power3.out', delay: 0.5 })
    .fromTo('.char', { opacity: 0 }, { opacity: 1, duration: 0.05, stagger: 0.05, ease: 'power1.out' }, '-=3')
    .fromTo('.info', { opacity: 0, y: 20 }, { opacity: 1, duration: 2, y: 0, ease: 'power1.out', delay: 1 }, '-=2')

  timeline.play()
})

const onRestartAnimation = () => {
  timeline?.restart()
}

onUnmounted(() => {
  timeline?.kill()
})

const splitText = (selector: string) => {
  const element = document.querySelector(selector)
  if (!element) return
  const text = element.textContent || ''
  element.innerHTML = text.split('').map(letter =>
    `<span class="char">${letter === ' ' ? '&nbsp;' : letter}</span>`,
  ).join('')
}
</script>

<template>
  <section class="space-y-5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Bouncy Cards
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <CreationsPostLinks
        post-link="https://x.com/codewithmontana/status/1894337850620903439"
      />
    </div>
    <CreationsShowcase
      :is-replay="true"
      class="h-[450px]"
      @restart="onRestartAnimation"
    >
Coming Soon
</CreationsShowcase>
  </section>
</template>
