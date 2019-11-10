import { ModalStore } from "../../modals/stores/modalStore"
import { SignupModal } from "../components/SignupModal"

export const spawnSignupModal = (modalStore: ModalStore) => {
    modalStore.spawn({
        key: "signup",
        title: "Signup",
        body: SignupModal
    })
}
