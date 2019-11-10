import { AuthStore } from "../stores/authStore"

export const login = async (
    store: AuthStore,
    emailOrUsername: string,
    password: string
) => {
    // This is a mock until we get the actual api
    const defaultEmail = "hmmmm@example.com"
    const email = emailOrUsername.includes("@") ? emailOrUsername : defaultEmail
    const username = email === defaultEmail ? emailOrUsername : "pewdiepie"

    // for ts to shut up about me not using it
    console.log(password)

    store.user = {
        email,
        username,
        profilePictureUrl:
            "https://cdn.vox-cdn.com/thumbor/DD8bzlNVAfCggIXvTTvIiG7m2Xw=/0x0:1200x800/1200x800/filters:focal(396x247:588x439)/cdn.vox-cdn.com/uploads/chorus_image/image/65111486/pewds.0.jpg"
    }
}
