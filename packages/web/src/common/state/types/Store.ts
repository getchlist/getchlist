export interface Store {
    init?(): Promise<unknown> | unknown
}

export interface InitialisableStore extends Store {
    init(): Promise<unknown> | unknown
}
