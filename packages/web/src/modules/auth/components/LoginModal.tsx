import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { login, LoginData } from "../actions/login"
import { useForm } from "../../../common/forms/hooks/useForm"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { Submits } from "../../../common/forms/components/Submits"
import { TextField } from "../../../common/design/components/TextField"

export const LoginModal: FunctionComponent = () => {
    const { authStore } = useStores()
    const { dimiss } = useModalContext()
    const { load, Output } = useLoadingAnimation(Loader)

    const handleSignup = async (data: LoginData) => {
        await load(login(authStore, data))
        dimiss()
    }

    const initialValues: LoginData = {
        email: "",
        password: ""
    }

    const Form = useForm(initialValues)

    return (
        <Output>
            <Form onSubmit={handleSignup}>
                <TextField<LoginData> name="email" type="email" />
                <TextField<LoginData> name="password" type="password" />

                <ModalFooter>
                    <Button onClick={dimiss}>Cancel</Button>
                    <Submits
                        component={Button}
                        propName="onClick"
                        variant="secondary"
                    >
                        Login
                    </Submits>
                </ModalFooter>
            </Form>
        </Output>
    )
}
