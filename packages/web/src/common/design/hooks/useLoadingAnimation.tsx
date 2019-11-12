import React, { FunctionComponent, useState } from "react"
import { useObservable } from "mobx-react-lite"

interface Task {
    current: null | Promise<unknown>
}

export const useLoadingAnimation = (Loader: FunctionComponent) => {
    const [isLoading, setLoading] = useState(false)

    // Store current running task
    const task = useObservable<Task>({
        current: null
    })

    const load = async (promise: Promise<unknown>) => {
        task.current = promise

        setLoading(true)

        await promise

        // handle cases where another loading animation was added afterwards
        if (task.current === promise) {
            setLoading(false)

            task.current = null
        }
    }

    const Output: FunctionComponent = ({ children }) =>
        isLoading ? <Loader /> : <> {children} </>

    return { load, Output }
}
