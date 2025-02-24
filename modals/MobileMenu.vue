<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '~/components/ui/sheet'
import { links } from '~/types'

const modalStore = useModalStore()

const isModalOpen = computed(() => {
  return modalStore?.type === 'mobileMenu' && modalStore?.isOpen
})

const onClose = () => {
  modalStore?.setIsOpen(false)
  modalStore?.onClose()
}
</script>

<template>
  <Sheet
    :open="isModalOpen"
    @update:open="onClose"
  >
    <SheetContent side="left">
      <SheetHeader class="sr-only">
        <SheetTitle>Mobile Menu</SheetTitle>
        <SheetDescription>
          This is a mobile menu
        </SheetDescription>
      </SheetHeader>
      <nav class="space-y-4">
        <div
          id="logos"
          class="flex items-center justify-center gap-3"
        >
          <NuxtLink
            to="https://nuxt.com"
            target="_blank"
            @click="onClose"
          >
            <Icon
              name="logos:nuxt-icon"
              class="size-16"
            />
          </NuxtLink>
          <Plus />
          <NuxtLink
            to="https://gsap.com"
            target="_blank"
            @click="onClose"
          >
            <NuxtImg
              src="/images/gsap.png"
              alt="gsap logo"
              class="h-10 w-auto"
            />
          </NuxtLink>
        </div>
        <ul class="sticky top-36 flex flex-1 flex-col space-y-3.5">
          <li class="space-y-3.5">
            <h3 class="font-semibold text-foreground">
              Getting Started
            </h3>
            <ul class="space-y-3.5 border-l border-muted-foreground">
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
                    @click="onClose"
                  >
                    <NuxtLink :to="child.path">
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="space-y-3.5">
            <h3 class="font-semibold text-foreground">
              Creations
            </h3>
            <ul class="space-y-3.5 border-l border-muted-foreground">
              <li class="pl-3.5 transition-colors hover:border-foreground hover:text-foreground">
                <NuxtLink
                  to="/creations/airbnb-image"
                  @click="onClose"
                >
                  Airbnb Image
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SheetContent>
  </Sheet>
</template>
