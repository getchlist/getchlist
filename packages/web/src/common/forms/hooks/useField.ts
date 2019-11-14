import { useObserver } from "mobx-react-lite"
import { FormContext, FormData } from "./../components/FormContext"
import { useContext } from "react"

export const useField = <T extends FormData = Record<string, string>>(
    name: keyof T
) => {
    const form = useContext(FormContext)

    if (form === null) {
        throw new Error("Cannot use fields outside forms")
    }

    return useObserver(() => {
        const data = form.data as T

        const current = data[name]
        const setCurrent = (value: T[typeof name]) => {
            data[name] = value
        }

        return [current, setCurrent] as const
    })
}
