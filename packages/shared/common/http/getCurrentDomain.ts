export const getCurrentDomain = () => {
    if (process.env.NODE_ENV === "production") {
        // TODO: change
        return "getchlist"
    }

    return "localhost"
}
