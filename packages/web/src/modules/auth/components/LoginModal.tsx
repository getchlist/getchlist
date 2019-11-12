import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Button } from "../../../common/design/components/Button"
import { login } from "../actions/login"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { useModalContext } from "../../modals/hooks/useModalOverlay"

export const LoginModal: FunctionComponent = () => {
    const { authStore } = useStores()
    const { dimiss } = useModalContext()
    const { load, Output } = useLoadingAnimation(Loader)

    const handleLogin = async () => {
        await load(login(authStore, "someone@example.hmm", "123"))
        dimiss()
    }

    return (
        <>
            Log in here!!!!
            <ModalFooter>
                <Output>
                    <Button onClick={dimiss}>Cancel</Button>
                    <Button onClick={handleLogin} variant="secondary">
                        Login
                    </Button>
                </Output>
            </ModalFooter>
        </>
    )
}
