import { Store } from "./Store"

export type ExtractStoreReturn<T extends Record<string, () => Store>> = {
    [K in keyof T]: ReturnType<T[K]>
}
