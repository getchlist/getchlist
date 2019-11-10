import React from "react"
import { css, Global } from "@emotion/core"
import { Theme } from "../types/Theme"

const style = (theme: Theme) => css`
    html,
    body {
        margin: 0;
        padding: 0;

        color: ${theme.fontColors.normal};
        background: ${theme.colors.primary};
    }

    body {
        overflow-y: auto;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        color: inherit;
        background: transparent;
        border: none;

        /* thanks bg */
        outline: none;
    }
`

export function GlobalStyles() {
    return <Global styles={style} />
}
