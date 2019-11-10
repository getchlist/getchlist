import React from "react"
import { styled } from "../../../modules/theming/themes"
import { Theme } from "../../../modules/theming/types/Theme"
import { Linkprops, Link } from "../../routing/components/Link"
import { Spaced } from "./Spaced"
import { chooseColor } from "../../../modules/theming/helpers/chooseColor"

interface ButtonProps {
    hoverBrightness?: number
    variant?: keyof Theme["colors"]
    spaced?: boolean
}

export const Button = styled.button<ButtonProps>(
    ({
        theme,
        spaced = false,
        hoverBrightness = 1.3,
        variant = "primary"
    }) => ({
        background: theme.colors[variant],
        borderRadius: theme.measures.borderRaduis,
        color: chooseColor(theme, variant),

        padding: theme.measures.spacing,
        margin: spaced ? theme.measures.spacing : "0",

        filter: "brightness(1)",
        transition: `filter ${theme.durations.normal}`,

        "&:hover": {
            filter: `brightness(${hoverBrightness})`
        }
    })
)

export const ButtonLink: React.FC<Linkprops & ButtonProps> = ({
    to,
    children,
    ...props
}) => {
    return (
        <Spaced>
            <Link to={to}>
                <Button {...props} spaced={false}>
                    {children}
                </Button>
            </Link>
        </Spaced>
    )
}
