import React from "react"
import { render } from "react-dom"
import { App } from "./modules/core/components/App"
import { createManager } from "./common/state/manager"

const main = async () => {
    const manager = createManager()

    await manager.init()

    render(<App manager={manager} />, document.getElementById("app"))
}

main()
