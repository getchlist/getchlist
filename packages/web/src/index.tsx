import React from "react"
import { render } from "react-dom"
import { App } from "./modules/core/components/App"

import "./modules/core/styles/global.css"
import { craeteManager } from "./common/state/manager"

const main = async () => {
    const manager = craeteManager()

    await manager.init()

    render(<App manager={manager} />, document.getElementById("app"))
}

main()
