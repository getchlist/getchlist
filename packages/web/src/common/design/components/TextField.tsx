import React from "react"
import { styled } from "../../../modules/theming/themes"
import { Theme } from "../../../modules/theming/types/Theme"
import { chooseColor } from "../../../modules/theming/helpers/chooseColor"
import { Spaced } from "./Spaced"
import { useField } from "../../forms/hooks/useField"
import { FormData } from "../../forms/components/FormContext"

interface InputProps {
    variant?: keyof Theme["colors"]
}

const Input = styled.input<InputProps>(({ theme, variant = "primary" }) => ({
    outline: "none",
    border: "none",
    background: "none",
    color: chooseColor(theme, variant),

    padding: theme.measures.spacing,
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1.3rem",

    borderBottom: `1px solid ${chooseColor(theme, variant)}`,
    transition: `border-bottom-color ${theme.durations.short}`,

    zIndex: 1,

    ["&:focus"]: {
        borderBottomColor: theme.colors.accent
    },

    ["&::placeholder"]: {
        color: chooseColor(theme, variant),
        opacity: 0.7,
        filter: `brightness${theme.brightnesses.darker}`
    }
}))

interface TextFieldOwnProps<T extends FormData> extends InputProps {
    placeholder?: string
    name: keyof T
}

type TextFieldProps<T extends FormData> = React.ComponentProps<typeof Input> &
    TextFieldOwnProps<T>

export const TextField = <T extends object>({
    name,
    placeholder,
    ...props
}: TextFieldProps<T>) => {
    const [value, setValue] = useField(name)

    return (
        <Spaced>
            <Input
                {...props}
                placeholder={placeholder || name}
                name={name}
                value={value}
                onChange={e => setValue(e.target.value)}
            ></Input>
        </Spaced>
    )
}
