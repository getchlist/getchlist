import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategorires } from "../../metadata/stores/metadataStore"

export const Explore: React.FC = () => {
    const { metadataStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategorires.explore,
        title: "Explore"
    })

    return <>Hello from the Explore component!</>
}
