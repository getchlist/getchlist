import React from "react"
import { css, Global } from "@emotion/core"
import { Theme } from "../types/Theme"

const style = (theme: Theme) => css`
    html,
    body {
        margin: 0;
        padding: 0;

        font-family: Barlow, sans-serif;

        color: ${theme.fontColors.normal};
        background: ${theme.colors.primary};
    }

    body {
        overflow-y: scroll;
    }

    a {
        color: ${theme.colors.accent};
        text-decoration: none;
    }

    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;

        line-height: normal;
    }
`

export function GlobalStyles() {
    return <Global styles={style} />
}
