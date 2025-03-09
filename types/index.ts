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

export interface Template {
  name: string
  link: string
  imgUrl: string
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
      { name: 'Service Card', path: '/creations/service-card' },
      { name: 'Flip Delete Button', path: '/creations/flip-delete-button' },
    ],
  },
])

export const templates = ref<Template[]>([
  {
    name: 'FlowGen',
    link: '/templates/flow-gen',
    imgUrl: 'https://images.unsplash.com/photo-1509099395498-a26c959ba0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
])
