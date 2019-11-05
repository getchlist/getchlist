import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategory } from "../../metadata/stores/metadataStore"

export const Docs: React.FC = () => {
    const { metadataStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategory.docs,
        title: "Docs"
    })

    return <>Hello from the Docs component!</>
}
