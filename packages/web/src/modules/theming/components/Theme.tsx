import React from "react"
import { ThemeProvider } from "emotion-theming"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

export const Theme: React.FC = ({ children }) => {
    const { themeStore } = useStores()
    const theme = useObserver(() => themeStore.theme)

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
