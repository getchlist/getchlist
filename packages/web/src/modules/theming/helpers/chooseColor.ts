import { Theme } from "../types/Theme"

export const chooseColor = (theme: Theme, bg: keyof Theme["colors"]) =>
    bg === "secondary" ? theme.fontColors.onSecondary : theme.fontColors.normal
