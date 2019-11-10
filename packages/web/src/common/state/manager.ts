import { StoreManager } from "./classes/StoreManager"
import { RoutingStore } from "../routing/stores/routingStore"
import { ExtractStoreReturn } from "./types/ExtractStoreMap"
import { MetadataStore } from "../../modules/metadata/stores/metadataStore"
import { ThemeStore } from "../../modules/theming/stores/themeStore"
import { AuthStore } from "../../modules/auth/stores/authStore"
import { ModalStore } from "../../modules/modals/stores/modalStore"

const stores = {
    routingStore: () => new RoutingStore(),
    metadataStore: () => new MetadataStore(),
    themeStore: () => new ThemeStore(),
    authStore: () => new AuthStore(),
    modalStore: () => new ModalStore()
}

export type Stores = ExtractStoreReturn<typeof stores>

export const createManager = () => new StoreManager<Stores>(stores)
