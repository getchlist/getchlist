import React from "react"
import { styled } from "../../theming/themes"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"
import {
    HEADER_HEIGHT,
    logo,
    BODY_PADDING,
    SPACING,
    BORDER_RADIUS
} from "../constants"
import { getColor, getTransparency, getDuration } from "../../theming/helpers"
import { Link } from "../../../common/routing/components/Link"

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

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

const Button = styled.button`
    margin: ${SPACING};
    padding: ${SPACING};

    background: ${getColor("primary")};
    border-radius: ${BORDER_RADIUS};

    filter: brightness(1);
    transition: filter ${getDuration("normal")};

    &:hover {
        filter: brightness(1.3);
    }
`

const ColoredButton = styled(Button)`
    background-color: ${getColor("secondary")};
`

const LogoContainer = styled.div`
    flex-grow: 1;
`

export const Header: React.FC<HeaderProps> = () => {
    return (
        <Container>
            <LogoContainer>
                <Link to="/">
                    <img height={BODY_PADDING} src={logo} />
                </Link>
            </LogoContainer>

            <Button>Sign in</Button>
            <ColoredButton>Sign up</ColoredButton>
        </Container>
    )
}
