import { ModalStore } from "../../modals/stores/modalStore"
import { LoginModal } from "../components/LoginModal"

export const spawnLoginModal = (modalStore: ModalStore) => {
    modalStore.spawn({
        key: "login",
        title: "Welcome to my first modal!",
        body: LoginModal
    })
}
