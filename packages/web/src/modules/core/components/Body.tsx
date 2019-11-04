import React from "react"
import { Layout } from "antd"
import { logo } from "../constants"

export const Body: React.FC = () => {
    // TODO: remove inline styles
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header>
                <img height="31px" src={logo}></img>
            </Layout.Header>

            <Layout.Content>Content</Layout.Content>

            <Layout.Footer style={{ background: "#202000", color: "white" }}>
                Footer goes here
            </Layout.Footer>
        </Layout>
    )
}
