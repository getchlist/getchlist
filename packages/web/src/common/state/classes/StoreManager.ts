import { Store, InitialisableStore } from "../types/Store"

export class StoreManager {
    public constructor(public stores: Store[]) {}

    public init() {
        return Promise.all(
            this.stores
                .filter(store => !!store.init)
                .map(store => (store as InitialisableStore).init())
        )
    }
}
