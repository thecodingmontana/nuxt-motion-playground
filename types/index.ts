export type ModalType = 'mobileMenu'

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
}
