import { AuthStore } from "../stores/authStore"

export interface SignupData {
    email: string
    username: string
    password: string
}

export const signup = (
    authStore: AuthStore,
    { email, username }: SignupData
) => {
    // This is a mock until we get the actual api
    // for ts to shut up about me not using it

    authStore.user = {
        email,
        username,
        profilePictureUrl:
            "https://cdn.vox-cdn.com/thumbor/DD8bzlNVAfCggIXvTTvIiG7m2Xw=/0x0:1200x800/1200x800/filters:focal(396x247:588x439)/cdn.vox-cdn.com/uploads/chorus_image/image/65111486/pewds.0.jpg"
    }

    return new Promise(resolve => setTimeout(resolve, 1000))
}
