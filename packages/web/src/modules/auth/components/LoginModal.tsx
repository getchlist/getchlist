import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { ModalComponent } from "../../modals/stores/modalStore"
import { Button } from "../../../common/design/components/Button"
import { login } from "../actions/login"
import { ModalFooter } from "../../modals/components/ModalFooter"

export const LoginModal: ModalComponent = ({ cancel }) => {
    const { authStore } = useStores()

    const handleLogin = () => {
        login(authStore, "someone@example.hmm", "123")
        cancel()
    }

    return (
        <>
            Log in here!!!!
            <ModalFooter>
                <Button onClick={cancel}>Cancel</Button>
                <Button onClick={handleLogin} variant="secondary">
                    Login
                </Button>
            </ModalFooter>
        </>
    )
}
