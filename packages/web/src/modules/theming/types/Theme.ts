export interface Theme {
    colors: {
        primary: string
        accent: string
        secondary: string
    }
    fontColors: {
        normal: string
        onSecondary: string
        muted: string
    }
    stateColors: {
        warning: string
        danger: string
    }
    transparencies: {
        positive: string
        negative: string
    }
    durations: {
        short: string
        normal: string
    }
    measures: {
        spacing: string
        borderRaduis: string
    }
    brightnesses: {
        lighter: number
        darker: number
    }
}
