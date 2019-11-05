import { getIsomorphicHistory } from "../helpers/getIsomorphicHistory"
import { observable } from "mobx"
import { Store } from "../../state/types/Store"

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
}
