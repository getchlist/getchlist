import React from "react"
import { styled } from "../../../modules/theming/themes"
import { Theme } from "../../../modules/theming/types/Theme"

const size = 30

interface checkboxProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    variant?: keyof Theme["colors"]
}

const LabelSwitch = styled.label(() => ({
    position: "relative",
    display: "inline-block",
    width: `${size * 2}px`,
    height: `${size}px`
}))

const InputSwitch = styled.input<checkboxProps>(({ theme }) => ({
    opacity: 0,
    width: 0,
    height: 0,

    "&:checked + span": {
        backgroundColor: theme.colors.secondary
    },

    "&:checked + span:before": {
        msTransform: `translateX(${(size * 2 - 4) / 2}px)`,
        WebkitTransform: `translateX(${(size * 2 - 4) / 2}px)`,
        transform: `translateX(${(size * 2 - 4) / 2}px)`
    },
    "span:before": {
        borderRadius: "50%"
    }
}))

const SpanSwitch = styled.span(({ theme }) => ({
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#ccc",
    WebkitTransition: theme.durations.short,
    transition: theme.durations.short,
    borderRadius: "100px",

    "&:before": {
        position: "absolute",
        content: `""`,
        height: `${(size * 2 - 4) / 2}px`,
        width: `${(size * 2 - 4) / 2}px`,
        left: `2px`,
        bottom: `1px`,
        backgroundColor: "white",
        WebkitTransition: theme.durations.short,
        transition: theme.durations.short,
        borderRadius: "50%"
    }
}))

/**
 * TODO:
 * Somehow get the value idk if I want to do that
 *
 * Make a size prop
 */

export const Switch: React.FC<checkboxProps> = ({ ...props }) => {
    return (
        <LabelSwitch>
            <InputSwitch {...props} type="checkbox" />
            <SpanSwitch />
        </LabelSwitch>
    )
}
