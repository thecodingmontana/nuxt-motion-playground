import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin,
    },
  }
})
