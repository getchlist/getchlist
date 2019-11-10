import React from "react"
import { Head } from "./Head"
import { Body } from "./Body"
import { ManagerContext } from "../../../common/state/components/ManagerContext"
import { StoreManager } from "../../../common/state/classes/StoreManager"
import { Stores } from "../../../common/state/manager"
import { Theme } from "../../theming/components/Theme"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import { Header } from "./Header"
import { navbarButtonMetadata } from "../routes"
import { ModalRenderer } from "../../modals/components/ModalRenderer"

interface AppProps {
    manager: StoreManager<Stores>
}

export const App: React.FC<AppProps> = ({ manager }) => {
    return (
        <ManagerContext.Provider value={manager}>
            <Head />

            <Theme>
                <GlobalStyles />
                <Header buttons={navbarButtonMetadata} />
                <Body />

                <ModalRenderer />
            </Theme>
        </ManagerContext.Provider>
    )
}
