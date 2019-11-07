import React from "react"
import { styled } from "../../theming/themes"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"
import { getFontColor, getColor } from "../../theming/helpers"
import { useStores } from "../../../common/state/hooks/useStores"

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

const Container = styled.div`
    color: ${getFontColor("normal")};
    background: ${getColor("primary")};
`

export const Header: React.FC<HeaderProps> = () => {
    const { themeStore } = useStores()

    return (
        <>
            <Container>Header goes here</Container>
            <button onClick={() => themeStore.next()}>Change theme</button>
        </>
    )
}
