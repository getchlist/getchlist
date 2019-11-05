import { StoreManager } from "./classes/StoreManager"
import { RoutingStore } from "../routing/stores/routingStore"
import { ExtractStoreReturn } from "./types/ExtractStoreMap"
import { MetadataStore } from "../../modules/metadata/stores/metadataStore"

const stores = {
    routingStore: () => new RoutingStore(),
    metadataStore: () => new MetadataStore()
}

export type Stores = ExtractStoreReturn<typeof stores>

export const craeteManager = () => new StoreManager<Stores>(stores)
