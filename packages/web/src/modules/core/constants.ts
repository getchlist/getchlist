export const tags = ["fast", "realible", "secure"]
export const title = "Getchlist"
export const logo =
    "https://raw.githubusercontent.com/webpack/media/master/logo/icon.png"

export const DEVELOPMENT =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
export const IS_SERVER = process.env.__SERVER__ === "true"

// copied from gears, maybe we should change it
export const HEADER_HEIGHT = "56px"
export const BODY_PADDING = "32px"

export const SPACING = "1rem"
export const BORDER_RADIUS = "4px"
