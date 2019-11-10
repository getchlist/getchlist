import { observable } from "mobx"
import { User } from "@getchlist/shared/modules/auth/types/User"
import { Store } from "../../../common/state/types/Store"

export class AuthStore implements Store {
    @observable
    public user: User | null = null

    public reset() {
        this.user = null
    }
}
