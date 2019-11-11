import { Theme } from "./types/Theme"
import _styled, { CreateStyled } from "@emotion/styled"

const common: Pick<Theme, "durations" | "measures"> = {
    durations: {
        normal: "250ms",
        short: "100ms"
    },
    measures: {
        borderRaduis: "4px",
        spacing: "1rem"
    }
}

// TODO: actually modify theme (curently its copied from gears)
const darkTheme: Theme = {
    ...common,
    colors: {
        primary: "#2B4162",
        accent: "#fed766",
        secondary: "#009fb7"
    },
    fontColors: {
        normal: "#eff1f4",
        onSecondary: "#eff1f4",
        muted: "rgba(255, 255, 255, 0.6)"
    },
    stateColors: {
        warning: "#1bbee2",
        danger: "#ffe500"
    },
    transparencies: {
        positive: "rgba(26, 33, 59, 0.5)",
        negative: "rgba(0, 0, 0, 0.5)"
    }
}

const lightTheme: Theme = {
    ...common,
    colors: {
        primary: "#eeeeee",
        accent: "#e81e57",
        secondary: "#009fb7"
    },
    fontColors: {
        normal: "#29274c",
        muted: "rgba(0, 0, 0, 0.6)",
        onSecondary: darkTheme.fontColors.normal
    },
    stateColors: {
        warning: "#ffe500",
        danger: "#ff2b2b"
    },
    transparencies: {
        positive: "rgba(0, 0, 0, 0.2)",
        negative: "rgba(0, 0, 0, 0.2)"
    }
}

export const themes = {
    dark: darkTheme,
    light: lightTheme
}

export type themeName = keyof typeof themes

export const defaultTheme: themeName = "dark"
export const styled = _styled as CreateStyled<Theme>
