import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { signup, SignupData } from "../actions/signup"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { TextField } from "../../../common/design/components/TextField"
import { useForm } from "../../../common/forms/hooks/useForm"
import { Submits } from "../../../common/forms/components/Submits"

export const SignupModal: FunctionComponent = () => {
    const { authStore } = useStores()
    const { dimiss } = useModalContext()
    const { load, Output } = useLoadingAnimation(Loader)

    const handleSignup = async (data: SignupData) => {
        await load(signup(authStore, data))
        dimiss()
    }

    const initialValues: SignupData = {
        email: "",
        password: "",
        username: ""
    }

    const Form = useForm(initialValues)

    return (
        <Output>
            <Form onSubmit={handleSignup}>
                <TextField<SignupData> name="username" type="username" />
                <TextField<SignupData> name="email" type="email" />
                <TextField<SignupData> name="password" type="password" />

                <ModalFooter>
                    <Button onClick={dimiss}>Cancel</Button>
                    <Submits
                        component={Button}
                        propName="onClick"
                        variant="secondary"
                    >
                        Signup
                    </Submits>
                </ModalFooter>
            </Form>
        </Output>
    )
}
