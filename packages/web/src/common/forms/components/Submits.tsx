import React from "react"
import { useSubmit } from "../hooks/useSubmit"

interface SubmitsProps<T extends object, K extends keyof T = keyof T> {
    propName: K
    component: React.ComponentType<T>
}

export const Submits = <T extends object>({
    component: Component,
    propName,
    ...props
}: T & SubmitsProps<T>) => {
    const submit = useSubmit()

    const overrides = {
        [propName]: submit
    }

    return <Component {...(props as T)} {...overrides}></Component>
}
