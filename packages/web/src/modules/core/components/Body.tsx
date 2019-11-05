import React from "react"
import { Layout } from "antd"
// import { logo } from "../constants"
import { RouterOutlet } from "../../../common/routing/components/RouterOutlet"
import { routes } from "../routes"
import { Header } from "./Header"

export const Body: React.FC = () => {
    // TODO: remove inline styles
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header>
                {/* <img height="31px" src={logo}></img> */}
                <Header />
            </Layout.Header>

            <Layout.Content>
                <RouterOutlet routes={routes} />
            </Layout.Content>

            <Layout.Footer style={{ background: "#202000", color: "white" }}>
                Footer goes here
            </Layout.Footer>
        </Layout>
    )
}
