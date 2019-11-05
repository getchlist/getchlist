import React from "react"
import { Route } from "../types/Route"
import { useStores } from "../../state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import UrlPattern from "url-pattern"

interface RouterOutletProps {
    routes: Route[]
}

export const RouterOutlet: React.FC<RouterOutletProps> = ({ routes }) => {
    const { routingStore } = useStores()

    const location = useObserver(() => routingStore.location)

    for (const { path, render } of routes) {
        const match = new UrlPattern(path).match(location.pathname)

        if (match) {
            return render(match)
        }
    }

    return null
}
