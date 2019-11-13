import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { pageCategorires } from "../../metadata/stores/metadataStore"
import Switch from "../../../common/design/components/Switch"

export const Home: React.FC = () => {
    const { metadataStore, themeStore } = useStores()

    metadataStore.setMetadata({
        category: pageCategorires.home,
        title: "Home"
    })

    return (
        <>
            <Switch onChange={() => themeStore.next()} />
            <p>Hello</p>
        </>
    )
}
