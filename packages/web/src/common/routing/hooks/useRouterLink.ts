import { useStores } from "../../state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

export const useRouterLink = (to: string) => {
    const { routingStore } = useStores()

    const activate = () => {
        routingStore.push(to)
    }

    const { pathname, hash } = useObserver(() => routingStore.location)

    // This will have a # if we want to also compare the hash
    const hasHash = to.includes("#")
    const isActive = hasHash ? `${pathname}${hash}` : pathname

    return { isActive, activate } as const
}
