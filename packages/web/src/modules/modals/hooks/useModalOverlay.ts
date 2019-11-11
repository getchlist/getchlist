import { useContext } from "react"
import { ModalContext } from "../components/ModalContext"

export const useModalContext = () => {
    const modalOverlay = useContext(ModalContext)

    if (modalOverlay === null) {
        throw new Error("Cannot find modal overlay")
    }

    return modalOverlay
}
