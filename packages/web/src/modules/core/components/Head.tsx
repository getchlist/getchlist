import React from "react"
import ReactDOM from "react-dom"
import { IS_SERVER } from "../constants"

export const Head: React.FC = () => {
    const content = (
        <>
            <title>Getchlist | Home</title>
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
