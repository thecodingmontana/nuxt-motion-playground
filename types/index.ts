export type ModalType = 'mobileMenu'

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
}

export interface AirbnbImage {
  src: string
  alt: string
  rotate: number
}

export const links = ref([
  {
    title: 'Getting Started',
    children: [
      { name: 'Introduction', path: '/creations' },
    ],
  },
  {
    title: 'Creations',
    children: [
      { name: 'Airbnb Image', path: '/creations/airbnb-image' },
      { name: 'Showcase Cards', path: '/creations/showcase-cards' },
      { name: 'Sentinel Protocol', path: '/creations/sentinel-protocol' },
    ],
  },
])
