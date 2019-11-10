import { getCurrentDomain } from "./helpers/getCurrentDomain"

export const apiBaseUrl =
    process.env.NODE_ENV === "production"
        ? `https://api.${getCurrentDomain()}.dev`
        : `http://${getCurrentDomain()}:8090`
