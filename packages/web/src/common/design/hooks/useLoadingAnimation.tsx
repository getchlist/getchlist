import React, { FunctionComponent, useState } from "react"

export const useLoadingAnimation = (Loader: FunctionComponent) => {
    const [isLoading, setLoading] = useState(false)

    const load = async (promise: () => Promise<unknown> | unknown) => {
        setLoading(true)
        await promise()
        setLoading(false)
    }

    const Output: FunctionComponent = ({ children }) =>
        isLoading ? <Loader /> : <> {children} </>

    return { load, Output }
}
