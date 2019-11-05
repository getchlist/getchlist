import React from "react"
import { Route } from "../../common/routing/types/Route"
import { Link } from "../../common/routing/components/Link"

interface AdvancedRoute extends Route {
    navbar?: boolean
}

export const routes: AdvancedRoute[] = [
    {
        path: "/",
        render: () => <h1>Hello from home</h1>,
        navbar: true
    },
    {
        path: "/docs",
        render: () => <h1>Hello from docs</h1>,
        navbar: true
    },
    {
        path: "/explore",
        render: () => <h1>Hello from explore</h1>,
        navbar: true
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
