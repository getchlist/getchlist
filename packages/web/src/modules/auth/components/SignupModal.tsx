import React, { FunctionComponent } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Button } from "../../../common/design/components/Button"
import { ModalFooter } from "../../modals/components/ModalFooter"
import { signup, SignupData } from "../actions/signup"
import { useModalContext } from "../../modals/hooks/useModalOverlay"
import { Loader } from "../../../common/design/components/Loader"
import { useLoadingAnimation } from "../../../common/design/hooks/useLoadingAnimation"
import { Formik, Field, Form } from "formik"
import { TextField } from "../../../common/design/components/TextField"

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

    return (
        <Formik initialValues={initialValues} onSubmit={handleSignup}>
            <Form>
                <Field type="email" name="email">
                    {TextField}
                </Field>
                <Field type="text" name="username">
                    {TextField}
                </Field>
                <Field type="password" name="password">
                    {TextField}
                </Field>

                <ModalFooter>
                    <Output>
                        <Button onClick={dimiss}>Cancel</Button>
                        <Button type="submit" variant="secondary">
                            Signup
                        </Button>
                    </Output>
                </ModalFooter>
            </Form>
        </Formik>
    )
}
