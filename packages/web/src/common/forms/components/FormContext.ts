import { createContext } from "react"

export type FormData<T = {}> = T extends {} ? T : never
export interface Form<T = {}> {
    data: FormData<T>
    submit: () => void
}

export const FormContext = createContext<Form | null>(null)
