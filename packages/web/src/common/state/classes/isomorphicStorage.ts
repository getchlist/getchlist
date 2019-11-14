import { IS_SERVER } from "./../../../modules/core/constants"
import { observable, action } from "mobx"

export class IsomorphicStorage<T extends Record<string, unknown>> {
    @observable
    public static centralisedStorage = {}

    public get data() {
        return IsomorphicStorage.centralisedStorage as T
    }

    public set data(value: T) {
        Object.assign(IsomorphicStorage.centralisedStorage, value)
    }

    public constructor(private defaults: T) {
        if (IS_SERVER) {
            this.data = defaults
        } else {
            for (const key of Object.keys(defaults)) {
                this.set(key, this.get(key))
            }
        }
    }

    public get(key: keyof T): T[typeof key] {
        if (IS_SERVER) {
            return this.data[key] ?? this.defaults[key]
        } else {
            const stringifiedKey = String(key)
            const currentValue = localStorage.getItem(stringifiedKey)

            return currentValue ? JSON.parse(currentValue) : this.defaults[key]
        }
    }

    @action
    public set(key: keyof T, value: T[typeof key]) {
        if (!IS_SERVER) {
            localStorage.setItem(String(key), JSON.stringify(value))
        }

        this.data[key] = value

        return this
    }
}
