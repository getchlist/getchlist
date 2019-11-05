import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategory } from "../../metadata/stores/metadataStore"

export const Explore: React.FC = () => {
    const { metadataStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategory.explore,
        title: "Explore"
    })

    return <>Hello from the Explore component!</>
}
