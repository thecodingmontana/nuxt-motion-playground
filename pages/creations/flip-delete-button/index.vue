<script setup lang="ts">
import { Button } from '~/components/ui/button'

definePageMeta({
  layout: 'creations',
})

useHead({
  titleTemplate: '%s - Flip Delete Button',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Creations - Flip Delete Button',
  description: 'A Playground for animation driven interfaces with Nuxt.js and GSAP',
})

const { $gsap } = useNuxtApp()
const isShow = ref(false)

const onDeleteFlip = () => {
  if (isShow.value) {
    $gsap.to('.delete', {
      rotateX: 0,
      duration: 0.6,
    })
  }
  else {
    $gsap.to('.delete', {
      rotateX: 180,
      duration: 0.6,
    })
  }
  setTimeout(() => {
    isShow.value = !isShow.value
  }, 600)
}

const onCancelFlip = () => {
  if (!isShow.value) {
    $gsap.to('.cancel', {
      rotateX: 0,
      duration: 0.6,
    })
  }
  else {
    $gsap.to('.cancel', {
      rotateX: -180,
      duration: 0.6,
    })
  }
  setTimeout(() => {
    isShow.value = !isShow.value
  }, 600)
}
</script>

<template>
  <section class="space-y-5 px-3.5 sm:px-0">
    <h1 class="text-2xl font-semibold">
      Flip Delete Button
    </h1>
    <div class="content max-w-[100vw] space-y-3.5 px-3.5 leading-relaxed sm:px-0">
      <CreationsPostLinks
        original-link="https://ui.lndev.me/components/flip-delete-button#code"
      />
    </div>
    <CreationsShowcase
      :is-replay="false"
      class="h-[45vh] sm:h-[450px] overflow-y-scroll sm:overflow-hidden"
      button-class="text-black dark:text-white"
    >
      <Button
        v-if="isShow"
        class="px-10 cancel rounded-full transition-transform duration-200 hover:scale-105"
        variant="outline"
        @click="onCancelFlip"
      >
        Cancel
      </Button>
      <Button
        v-else
        class="px-10 delete rounded-full transition-transform duration-200 hover:scale-105"
        variant="destructive"
        @click="onDeleteFlip"
      >
        Delete
      </Button>
    </CreationsShowcase>
  </section>
</template>
