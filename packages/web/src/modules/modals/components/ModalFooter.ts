import { styled } from "../../theming/themes"
import { getMeasure } from "../../theming/helpers"

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-up: ${getMeasure("spacing")};

    & > * {
        margin-left: ${getMeasure("spacing")};
        margin-right: ${getMeasure("spacing")};
    }
`
