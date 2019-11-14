import React from "react"
import { RouterOutlet } from "../../../common/routing/components/RouterOutlet"
import { routes } from "../routes"
import { styled } from "../../theming/themes"
import { HEADER_HEIGHT } from "../constants"

const Container = styled.div`
    margin-top: ${HEADER_HEIGHT};
`

export const Body: React.FC = () => {
    return (
        <Container>
            <RouterOutlet routes={routes} />
        </Container>
    )
}
