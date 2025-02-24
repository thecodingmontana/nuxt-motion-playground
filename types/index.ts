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
