export const applyToEach = <
    T extends unknown[],
    N extends string,
    K extends Record<N, (...args: T) => unknown>
>(
    array: K[],
    key: N,
    ...args: T
) => {
    return array.map(element => element[key](...args))
}

export const applyToEachIfExists = <
    T extends unknown[],
    N extends string,
    K extends Record<N, (...args: T) => unknown>
>(
    array: Partial<K>[],
    key: N,
    ...args: T
) => {
    return array
        .filter(element => element[key])
        .map(element => (element[key] as K[N]).apply(element, args))
}
