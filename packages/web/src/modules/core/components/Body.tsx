import React from "react"
import { RouterOutlet } from "../../../common/routing/components/RouterOutlet"
import { routes } from "../routes"
import { styled } from "../../theming/themes"
import { HEADER_HEIGHT } from "../constants"
import { useStores } from "../../../common/state/hooks/useStores"

const Container = styled.div`
    margin-top: ${HEADER_HEIGHT};
`

export const Body: React.FC = () => {
    const { themeStore } = useStores()

    return (
        <Container>
            <button onClick={() => themeStore.next()}>Change theme</button>
            <RouterOutlet routes={routes} />
        </Container>
    )
}
