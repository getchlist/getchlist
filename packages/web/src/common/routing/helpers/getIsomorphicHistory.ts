import { IS_SERVER } from "../../../modules/core/constants"
import { createBrowserHistory, createMemoryHistory } from "history"

export const getIsomorphicHistory = () => {
    if (IS_SERVER) {
        return createMemoryHistory()
    }

    return createBrowserHistory()
}
