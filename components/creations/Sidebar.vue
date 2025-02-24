<script setup lang="ts">
import { links } from '~/types'

const { $gsap } = useNuxtApp()

let animation: gsap.core.Tween | null = null

onMounted(() => {
  animation = $gsap.from('ul li', {
    opacity: 0,
    y: 20,
    stagger: 0.3,
    ease: 'power2.out',
  })
})

onUnmounted(() => {
  if (animation) animation.kill()
})
</script>

<template>
  <nav class="sticky top-[144px] hidden w-60 flex-col self-start pr-3.5 text-muted-foreground lg:flex">
    <ul class="sticky top-36 flex flex-1 flex-col space-y-3.5">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="space-y-3.5"
      >
        <h3 class="font-semibold text-foreground">
          {{ link.title }}
        </h3>
        <ul class="space-y-3.5 border-l border-muted-foreground">
          <li
            v-for="(child, childIndex) in link.children"
            :key="childIndex"
            class="pl-3.5 transition-colors hover:border-foreground hover:text-foreground"
          >
            <NuxtLink :to="child.path">
              {{ child.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
