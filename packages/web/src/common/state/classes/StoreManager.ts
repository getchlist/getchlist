import { Store } from "../types/Store"
import { applyToEachIfExists } from "../../lang/arrays/helpers/applyToEach"

export class StoreManager<T extends Record<string, Store>> {
    public stores: T = ({} as unknown) as T

    /**
     * Manager to hold mroe advanced stores.
     *
     * @param instantiators Object of store classes to use
     */
    constructor(public instantiators: { [K in keyof T]: () => T[K] }) {
        for (const [name, creator] of Object.entries(instantiators)) {
            this.stores[name as keyof T] = creator()
        }
    }

    public async init() {
        await Promise.all(
            applyToEachIfExists(Object.values(this.stores), "init")
        )
    }
}
