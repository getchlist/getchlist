import { styled } from "../../../modules/theming/themes"

interface LayerProps {
    zIndex?: number
}

export const Layer = styled.div<LayerProps>(({ zIndex = 0 }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex
}))
