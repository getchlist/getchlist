import { Route } from "../../common/routing/types/Route"
import { Home } from "./components/Home"
import { NavbarButtonMetadata } from "../metadata/types/NavbarButtonMetadata"
import { pageCategory } from "../metadata/stores/metadataStore"
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
        category: pageCategory.home
    },
    {
        text: "Explore",
        to: "/explore",
        category: pageCategory.explore
    },
    {
        text: "Documentation",
        to: "/docs",
        category: pageCategory.docs
    }
]
