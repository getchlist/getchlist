import React from "react"
import { useMetadata } from "../../metadata/hooks/useMetadata"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

export const Header: React.FC<HeaderProps> = ({ buttons }) => {
    const { category } = useMetadata()

    console.log({ category, buttons })

    return <>Header goes here</>
}
