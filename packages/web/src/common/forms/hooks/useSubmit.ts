import { FormContext } from "./../components/FormContext"
import { useContext } from "react"

export const useSubmit = () => {
    const form = useContext(FormContext)

    if (form === null) {
        throw new Error("Cannot use fields outside forms")
    }

    return () => form.submit()
}
