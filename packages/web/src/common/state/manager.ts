import { StoreManager } from "./classes/StoreManager"
import { RoutingStore } from "../routing/stores/routingStore"
import { ExtractStoreReturn } from "./types/ExtractStoreMap"

const stores = { routingStore: () => new RoutingStore() }

export type Stores = ExtractStoreReturn<typeof stores>

export const craeteManager = () => new StoreManager<Stores>(stores)
