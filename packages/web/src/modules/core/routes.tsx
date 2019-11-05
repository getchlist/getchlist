import React from "react"
import { Route } from "../../common/routing/types/Route"

export const routes: Route[] = [
    {
        path: "/",
        render: () => <h1>Hello from home</h1>
    },
    {
        path: "/account",
        render: () => <h1>Hello from the account page!</h1>
    }
]
