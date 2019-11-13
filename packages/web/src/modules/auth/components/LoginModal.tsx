import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { login, LoginData } from "../actions/login"
import { useForm } from "../../../common/forms/hooks/useForm"
import { useField } from "../../../common/forms/hooks/useField"
import { Button, ButtonProps } from "../../../common/design/components/Button"
import { useSubmit } from "../../../common/forms/hooks/useSubmit"
import { ModalFooter } from "../../modals/components/ModalFooter"

const SomeInput = ({ name }: { name: keyof LoginData }) => {
    const [value, setValue] = useField<LoginData>(name)

    return (
        <input
            name={name}
            placeholder={name}
            value={value}
            onChange={e => setValue(e.target.value)}
        ></input>
    )
}

const SomeButton: React.FC<ButtonProps> = props => {
    const submit = useSubmit()

    return <Button {...props} onClick={submit}></Button>
}

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
                <SomeInput name="email"></SomeInput>
                <SomeInput name="password"></SomeInput>

                <ModalFooter>
                    <SomeButton>Login</SomeButton>
                </ModalFooter>
            </Form>
        </Output>
    )
}
