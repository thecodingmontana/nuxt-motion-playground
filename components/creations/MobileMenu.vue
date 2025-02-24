<script setup lang="ts">
const modalStore = useModalStore()

const onOpen = () => {
  modalStore?.onOpenType('mobileMenu')
  modalStore?.setIsOpen(true)
}
</script>

<template>
  <div class="flex items-center justify-between border-y px-3.5 pb-3.5 lg:border-none lg:px-9 lg:pb-0">
    <div class="flex items-center p-3.5 pb-0 text-muted-foreground lg:hidden">
      <button
        @click="onOpen"
      >
        <div class="flex items-center gap-3.5 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu size-5"
          ><line
            x1="4"
            x2="20"
            y1="12"
            y2="12"
          /><line
            x1="4"
            x2="20"
            y1="6"
            y2="6"
          /><line
            x1="4"
            x2="20"
            y1="18"
            y2="18"
          /></svg><span class="h-6">Menu</span>
        </div>
      </button>
    </div>
  </div>
</template>
