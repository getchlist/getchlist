import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { Formik, Field, Form } from "formik"
import { TextField } from "../../../common/design/components/TextField"
import { login, LoginData } from "../actions/login"

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

    return (
        <Formik initialValues={initialValues} onSubmit={handleSignup}>
            <Form>
                <Field type="email" name="email">
                    {TextField}
                </Field>
                <Field type="password" name="password">
                    {TextField}
                </Field>

                <ModalFooter>
                    <Output>
                        <Button onClick={dimiss}>Cancel</Button>
                        <Button type="submit" variant="secondary">
                            Login
                        </Button>
                    </Output>
                </ModalFooter>
            </Form>
        </Formik>
    )
}
