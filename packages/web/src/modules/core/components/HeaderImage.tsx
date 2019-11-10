import React from "react"
import { BODY_PADDING } from "../constants"

interface HeaderImageProps {
    src: string
    square?: boolean
}

export const HeaderImage: React.FC<HeaderImageProps> = ({
    src,
    square = false
}) => (
    <img
        src={src}
        height={BODY_PADDING}
        width={square ? BODY_PADDING : undefined}
    />
)
