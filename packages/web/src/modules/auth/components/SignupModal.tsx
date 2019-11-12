import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { signup } from "../actions/signup"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"

export const SignupModal: FunctionComponent = () => {
    const { authStore } = useStores()
    const { dimiss } = useModalContext()
    const { load, Output } = useLoadingAnimation(Loader)

    const handleSignup = async () => {
        await load(signup(authStore, "someone@example.hmm", "pewdiepie", "123"))
        dimiss()
    }

    return (
        <>
            Sign up here
            <ModalFooter>
                <Output>
                    <Button onClick={dimiss}>Cancel</Button>
                    <Button onClick={handleSignup} variant="secondary">
                        Signup
                    </Button>
                </Output>
            </ModalFooter>
        </>
    )
}
