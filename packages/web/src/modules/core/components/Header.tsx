import React from "react"
import { Menu } from "antd"
import { Link } from "../../../common/routing/components/Link"
import { useMetadata } from "../../metadata/hooks/useMetadata"
import { NavbarButtonMetadata } from "../../metadata/types/NavbarButtonMetadata"

interface HeaderProps {
    buttons: NavbarButtonMetadata[]
}

export const Header: React.FC<HeaderProps> = ({ buttons }) => {
    const { category } = useMetadata()

    console.log(category)

    return (
        <>
            <Menu
                style={{ lineHeight: "64px" }}
                theme="dark"
                mode="horizontal"
                selectable={false}
                selectedKeys={buttons
                    .filter(button => button.category === category)
                    // Ant ui only accepts strings
                    .map(button => String(button.category))}
            >
                {buttons.map(button => (
                    <Menu.Item key={String(button.category)}>
                        <Link to={button.to}>{button.text}</Link>{" "}
                    </Menu.Item>
                ))}
            </Menu>
        </>
    )
}
