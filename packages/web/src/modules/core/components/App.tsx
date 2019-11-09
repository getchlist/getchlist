import React from "react"
import { Head } from "./Head"
import { Body } from "./Body"
import { ManagerContext } from "../../../common/state/components/ManagerContext"
import { StoreManager } from "../../../common/state/classes/StoreManager"
import { Stores } from "../../../common/state/manager"
import { Theme } from "../../theming/components/Theme"
import { GlobalStyles } from "../../theming/components/GlobalStyles"

interface AppProps {
    manager: StoreManager<Stores>
}

export const App: React.FC<AppProps> = ({ manager }) => {
    return (
        <ManagerContext.Provider value={manager}>
            <Theme>
                <GlobalStyles />
                <Head />
                <Body />
            </Theme>
        </ManagerContext.Provider>
    )
}
