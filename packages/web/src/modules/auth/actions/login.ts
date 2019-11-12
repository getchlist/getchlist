import { AuthStore } from "../stores/authStore"

export interface LoginData {
    email: string
    password: string
}

export const login = (store: AuthStore, { email }: LoginData) => {
    store.user = {
        email,
        username: "Pewdiepie",
        profilePictureUrl:
            "https://cdn.vox-cdn.com/thumbor/DD8bzlNVAfCggIXvTTvIiG7m2Xw=/0x0:1200x800/1200x800/filters:focal(396x247:588x439)/cdn.vox-cdn.com/uploads/chorus_image/image/65111486/pewds.0.jpg"
    }

    return new Promise(resolve => setTimeout(resolve, 500))
}
