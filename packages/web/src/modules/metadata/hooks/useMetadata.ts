import { useObserver } from "mobx-react-lite"
import { useStores } from "../../../common/state/hooks/useStores"

/**
 * Gets the current metadata for the page.
 */
export const useMetadata = () => {
    const { metadataStore } = useStores()

    return useObserver(() => metadataStore.metadata)
}
