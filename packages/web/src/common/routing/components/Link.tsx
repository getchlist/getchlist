import React from "react"
import { useRouterLink } from "../hooks/useRouterLink"

interface Linkprops {
    to: string
}

export const Link: React.FC<Linkprops> = ({ children, to }) => {
    const { activate } = useRouterLink(to)

    const click = (e: React.MouseEvent) => {
        e.preventDefault()

        activate()
    }

    return (
        <a href={to} onClick={click}>
            {children}
        </a>
    )
}
