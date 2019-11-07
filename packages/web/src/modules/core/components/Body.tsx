import React from "react"
import { RouterOutlet } from "../../../common/routing/components/RouterOutlet"
import { routes, navbarButtonMetadata } from "../routes"
import { Header } from "./Header"

export const Body: React.FC = () => {
    return (
        <>
            <Header buttons={navbarButtonMetadata} />
            <RouterOutlet routes={routes} />
        </>
    )
}
