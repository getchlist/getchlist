export interface Store {
    init?(): unknown
    reset?(): unknown
}

export interface InitialisableStore extends Store {
    init(): Promise<unknown> | unknown
}
