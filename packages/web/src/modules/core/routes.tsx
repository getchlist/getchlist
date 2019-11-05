import React from "react"
import { Route } from "../../common/routing/types/Route"
import { Link } from "../../common/routing/components/Link"

export const routes: Route[] = [
    {
        path: "/",
        render: () => <h1>Hello from home</h1>
    },
    {
        path: "/account",
        render: () => <h1>Hello from the account page!</h1>
    },
    {
        path: "/a",
        render: () => (
            <>
                This is the a page!!! <Link to="b">Go to b</Link>
            </>
        )
    },
    {
        path: "/b",
        render: () => (
            <>
                This is the b page!!! <Link to="a">Go to a</Link>
            </>
        )
    }
]
