import React from "react"
import { styled } from "../../../modules/theming/themes"
import { Theme } from "../../../modules/theming/types/Theme"
import { FieldProps } from "formik"
import { chooseColor } from "../../../modules/theming/helpers/chooseColor"
import { Spaced } from "./Spaced"

interface InputProps {
    variant: keyof Theme["colors"]
}

const Input = styled.input<InputProps>(({ theme, variant }) => ({
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
        filter: "brightness(0.7)"
    }
}))

interface TextFieldProps extends InputProps {
    placeholder?: string
}

export const TextField: React.FC<TextFieldProps & FieldProps<string>> = ({
    variant = "secondary",
    field,
    ...props
}) => {
    const placeholder = props.placeholder?.length
        ? props.placeholder
        : field.name

    return (
        <Spaced>
            <Input
                variant={variant}
                placeholder={placeholder}
                {...field}
            ></Input>
        </Spaced>
    )
}
