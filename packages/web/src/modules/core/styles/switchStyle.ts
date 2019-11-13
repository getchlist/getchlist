import { styled } from "../../theming/themes"
const size = 30
const color = "#009fb7"

export const LabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: ${size * 2}px;
    height: ${size}px;
`
export const InputSwitch = styled.input`
    & {
        opacity: 0;
        width: 0;
        height: 0;
    }
    &:checked + span {
        background-color: ${color};
    }
    &:checked + span:before {
        -webkit-transform: translateX(${(size * 2 - 4) / 2}px);
        -ms-transform: translateX(${(size * 2 - 4) / 2}px);
        transform: translateX(${(size * 2 - 4) / 2}px);
    }
`
export const SpanSwitch = styled.span`
    & {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
    &:before {
        position: absolute;
        content: "";
        height: ${(size * 2 - 4) / 2}px;
        width: ${(size * 2 - 4) / 2}px;
        left: 2px;
        bottom: 1px;
        background-color: white;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
    & {
        border-radius: 100px;
    }
    &:before {
        border-radius: 50%;
    }
`
