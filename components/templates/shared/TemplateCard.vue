<script setup lang="ts">
import type { Template } from '~/types'

const props = defineProps<{
  template: Template
}>()
</script>

<template>
  <NuxtLink
    :to="props.template.link"
    target="_blank"
    aria-label="Templates project link"
    class="group template relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-[#252628] p-1 dark:shadow-2xl dark:shadow-zinc-950/50 dark:backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div
        class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"
      />
    </div>
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :alt="props.template.name"
        class="h-full w-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :aria-label="`Template - ${props.template.name}`"
        :src="props.template.imgUrl"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div
        class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3"
      >
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <p class="whitespace-nowrap text-sm font-semibold text-white/90">
                {{ props.template.name }}
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <Icon
              name="i-heroicons:arrow-right"
              class="size-3 text-white"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
