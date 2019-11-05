import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategory } from "../../metadata/stores/metadataStore"

export const Home: React.FC = () => {
    const { metadataStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategory.home,
        title: "Home"
    })

    return <>Hello from the Home component!</>
}
