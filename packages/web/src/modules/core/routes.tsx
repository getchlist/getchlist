import { Route } from "../../common/routing/types/Route"
import { Home } from "./components/Home"
import { NavbarButtonMetadata } from "../metadata/types/NavbarButtonMetadata"
import { pageCategorires } from "../metadata/stores/metadataStore"
import { Explore } from "./components/Explore"
import { Docs } from "./components/Docs"

export const routes: Route[] = [
    {
        path: "/",
        render: Home
    },
    {
        path: "/docs",
        render: Docs
    },
    {
        path: "/explore",
        render: Explore
    }
]

export const navbarButtonMetadata: NavbarButtonMetadata[] = [
    {
        text: "Home",
        to: "/",
        category: pageCategorires.home
    },
    {
        text: "Explore",
        to: "/explore",
        category: pageCategorires.explore
    },
    {
        text: "Documentation",
        to: "/docs",
        category: pageCategorires.docs
    }
]
