import React from "react"
import { Menu } from "antd"
import { routes } from "../routes"
import { useObserver } from "mobx-react-lite"
import { useStores } from "../../../common/state/hooks/useStores"
import UrlPattern from "url-pattern"
import { Link } from "../../../common/routing/components/Link"

export const Header: React.FC = () => {
    const { routingStore } = useStores()
    const { pathname } = useObserver(() => routingStore.location)

    return (
        <>
            <Menu
                style={{ lineHeight: "64px" }}
                theme="dark"
                mode="horizontal"
                selectable={false}
                selectedKeys={routes
                    .filter(({ path }) => new UrlPattern(pathname).match(path))
                    .map(route => route.path)}
            >
                {routes
                    .filter(route => route.navbar)
                    .map(route => (
                        <Menu.Item key={route.path}>
                            <Link to={route.path}>{route.path}</Link>{" "}
                        </Menu.Item>
                    ))}
            </Menu>
        </>
    )
}
