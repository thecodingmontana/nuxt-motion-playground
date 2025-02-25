<script setup lang="ts">
definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Sentinel Protocol',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Sentinel Protocol',
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
      Sentinel Protocol
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <p class="max-w-xl">
        Recreated the Sentinel Protocol animation, inspired by <NuxtLink
          target="_blank"
          class="transition-colors hover:text-primary"
          to="https://x.com/kubadesign"
        >
          <strong>@kubadesign</strong></NuxtLink>.
      </p>
      <CreationsPostLinks
        post-link="https://x.com/codewithmontana/status/1894337850620903439"
        original-link="https://x.com/kubadesign/status/1882444428402692120"
      />
    </div>
    <CreationsShowcase
      :is-replay="true"
      class="h-[450px]"
      @restart="onRestartAnimation"
    >
      <div class="before:inset-x-0 before:z-[1] before:size-full p-5 sm:p-10 w-full h-full before:bg-gradient-to-t left-0 right-0 before:from-gray-900/70 absolute z-10">
        <div class="absolute bottom-10 text-white animate-text">
          <h2 class="text-md sm:text-2xl font-bold">
            The Sentinel Protocol
          </h2>
          <p class="text-sm text-balance sm:text-xl font-light">
            The old world died quietly. The new one screams.
          </p>
          <div class="info px-2 mt-4 flex items-center gap-3">
            <div class="h-[0.2px] w-6 bg-white self-start mt-4 flex-shrink-0" />
            <p class="text-sm text-balance dark:text-white sm:text-base text-muted">
              Nobody saw it coming. The city changed overnight - steel veins grew through concrete, neon bled into shadows. They called it an invasion.
            </p>
          </div>
        </div>
      </div>
      <NuxtImg
        src="/images/sentinel-protocol.jpg"
        class="zoomImg w-full h-full object-cover"
      />
    </CreationsShowcase>
  </section>
</template>
