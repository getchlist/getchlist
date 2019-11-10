import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { ModalComponent } from "../../modals/stores/modalStore"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { signup } from "../actions/signup"

export const SignupModal: ModalComponent = ({ cancel }) => {
    const { authStore } = useStores()

    const handleSignup = () => {
        signup(authStore, "someone@example.hmm", "pewdiepie", "123")
        cancel()
    }

    return (
        <>
            Sign up here
            <ModalFooter>
                <Button onClick={cancel}>Cancel</Button>
                <Button onClick={handleSignup} variant="secondary">
                    Signup
                </Button>
            </ModalFooter>
        </>
    )
}
