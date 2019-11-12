import { styled } from "../../../modules/theming/themes"

interface LayerProps {
    zIndex?: number
}

export const AbsoluteLayer = styled.div<LayerProps>(({ zIndex = 0 }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex
}))

export const Stacked = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    & > * {
        grid-column: 1;
        grid-row: 1;
    }
`
