import { IsomorphicStorage } from "./../../../common/state/classes/isomorphicStorage"
import { action, computed } from "mobx"
import { User } from "@getchlist/shared/modules/auth/types/User"
import { Store } from "../../../common/state/types/Store"

export class AuthStore implements Store {
    private storage = new IsomorphicStorage<{ user: User | null }>({
        user: null
    })

    @computed
    public get user() {
        return this.storage.data.user
    }

    public set user(value) {
        this.storage.set("user", value)
    }

    @action
    public reset() {
        this.user = null
    }
}
