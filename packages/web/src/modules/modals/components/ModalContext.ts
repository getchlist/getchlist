import { createContext } from "react"

export interface Modal {
    dimiss: () => void
}

export const ModalContext = createContext<Modal | null>(null)
