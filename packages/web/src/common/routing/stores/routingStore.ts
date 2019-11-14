import { getIsomorphicHistory } from "../helpers/getIsomorphicHistory"
import { observable, action } from "mobx"
import { Store } from "../../state/types/Store"
import { IS_SERVER } from "../../../modules/core/constants"

export enum HttpStatus {
    OK = 200,
    NotFound = 404
}

export class RoutingStore implements Store {
    private history = getIsomorphicHistory()
    public status = HttpStatus.OK

    @observable public location = this.history.location

    public init() {
        this.history.listen(location => {
            this.location = location
        })
    }

    @action
    public push(path: string) {
        if (this.location.pathname === path) {
            return
        }

        this.history.push(path)

        if (!IS_SERVER) {
            window.scrollTo(0, 0)
        }
    }
}
