import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategorires } from "../../metadata/stores/metadataStore"

export const Home: React.FC = () => {
    const { metadataStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategorires.home,
        title: "Home"
    })

    return <>Hello from the Home component!</>
}
