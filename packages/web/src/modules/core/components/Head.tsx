import React from "react"
import ReactDOM from "react-dom"
import { IS_SERVER } from "../constants"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

export const Head: React.FC = () => {
    const { metadataStore } = useStores()
    const { title } = useObserver(() => metadataStore.metadata)

    const content = (
        <>
            <title>Getchlist | {title}</title>
        </>
    )

    if (IS_SERVER) {
        return (
            <>
                {React.Children.map(content.props.children, (element, i) =>
                    React.cloneElement(element, {
                        key: i,
                        "data-server-head": true
                    })
                )}
            </>
        )
    }

    return ReactDOM.createPortal(content, document.head)
}
