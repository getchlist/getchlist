import { styled } from "../../../modules/theming/themes"

export const Fluid = styled.div`
    height: 100%;
    width: 100%;
`

export const Center = styled(Fluid)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
