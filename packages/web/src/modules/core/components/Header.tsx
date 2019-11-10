import React from "react"
import { styled } from "../../theming/themes"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"
import { HEADER_HEIGHT, logo, BODY_PADDING } from "../constants"
import { getColor, getTransparency } from "../../theming/helpers"
import { Link } from "../../../common/routing/components/Link"
import { Button, ButtonLink } from "../../../common/design/components/Button"
import { Space } from "../../../common/design/components/Space"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    height: ${HEADER_HEIGHT};
    background: ${getColor("primary")};
    border-bottom: 1px solid ${getTransparency("negative")};

    display: flex;
    align-items: center;
    padding: 0 ${BODY_PADDING};
    box-sizing: border-box;
`

const Logo = styled.img`
    padding-right: ${BODY_PADDING};
`

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

export const Header: React.FC<HeaderProps> = ({ buttons }) => {
    const { metadataStore } = useStores()
    const metadata = useObserver(() => metadataStore.metadata)

    return (
        <Container>
            <Link to="/">
                <Logo height={BODY_PADDING} src={logo} />
            </Link>

            {buttons.map(({ category, to, text }) => {
                const variant =
                    category === metadata.category ? "secondary" : "primary"

                return (
                    <ButtonLink to={to} variant={variant} key={category}>
                        {text}
                    </ButtonLink>
                )
            })}

            <Space />

            <Button variant="primary">Sign in</Button>
            <Button variant="secondary">Sign up</Button>
        </Container>
    )
}
