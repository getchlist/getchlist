import { Theme } from "../../theming/types/Theme"
import { chooseColor } from "../../theming/helpers/chooseColor"
import { styled } from "../../theming/themes"

interface ModalContent {
    variant: keyof Theme["colors"]
}

export const ModalContent = styled.div<ModalContent>(({ theme, variant }) => ({
    background: theme.colors[variant],
    color: chooseColor(theme, variant),

    padding: theme.measures.spacing,
    borderRadius: theme.measures.borderRaduis,

    display: "flex",
    flexDirection: "column"
}))
