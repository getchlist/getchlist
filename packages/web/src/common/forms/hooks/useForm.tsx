import React from "react"
import { useObservable } from "mobx-react-lite"
import { FormData, FormContext } from "../components/FormContext"

interface FormProps<T> {
    onSubmit?: (values: T) => void
}

export const useForm = <T extends FormData>(
    initialValues: T
): React.FC<FormProps<T>> => {
    const data = useObservable(initialValues)

    return ({ children, onSubmit = () => {} }) => {
        const contextValue = {
            data,
            submit: () => onSubmit(data)
        }

        return (
            <FormContext.Provider value={contextValue}>
                {children}
            </FormContext.Provider>
        )
    }
}
