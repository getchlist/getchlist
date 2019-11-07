import { Theme } from "./types/Theme"
import _styled, { CreateStyled } from "@emotion/styled"

// TODO: actually modify theme (curently its copied from gears)
const darkTheme: Theme = {
    colors: {
        primary: "#1a213b",
        accent: "#f5c721"
    },
    fontColors: {
        normal: "#eeeeee",
        muted: "rgba(255, 255, 255, 0.6)"
    },
    stateColors: {
        warning: "#1bbee2",
        danger: "#ffe500"
    }
}

const lightTheme: Theme = {
    colors: {
        primary: "#eeeeee",
        accent: "#e81e57"
    },
    fontColors: {
        normal: "#29274c",
        muted: "rgba(0, 0, 0, 0.6)"
    },
    stateColors: {
        warning: "#ffe500",
        danger: "#ff2b2b"
    }
}

export const themes = {
    dark: darkTheme,
    light: lightTheme
}

export type themeName = keyof typeof themes

export const defaultTheme: themeName = "dark"
export const styled = _styled as CreateStyled<Theme>
