import React from "react"
import styled from "@emotion/styled"
import { useMetadata } from "../../metadata/hooks/useMetadata"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

const Container = styled.div`
    color: red;
`

export const Header: React.FC<HeaderProps> = ({ buttons }) => {
    const { category } = useMetadata()

    console.log({ category, buttons })

    return <Container>Header goes here</Container>
}
