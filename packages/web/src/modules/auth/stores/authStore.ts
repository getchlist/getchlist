import { observable } from "mobx"
import { User } from "@getchlist/shared/modules/auth/types/User"
import { Store } from "../../../common/state/types/Store"

export class AuthStore implements Store {
    @observable
    public user: User | null = null

    public async login(emailOrUsername: string, password: string) {
        // This is a mock until we get the actual api

        const defaultEmail = "hmmmm@example.com"
        const email = emailOrUsername.includes("@")
            ? emailOrUsername
            : defaultEmail
        const username = email === defaultEmail ? emailOrUsername : "pewdiepie"

        // for ts to shut up about me not using it
        console.log(password)

        this.user = {
            email,
            username,
            profilePictureUrl:
                "https://cdn.vox-cdn.com/thumbor/DD8bzlNVAfCggIXvTTvIiG7m2Xw=/0x0:1200x800/1200x800/filters:focal(396x247:588x439)/cdn.vox-cdn.com/uploads/chorus_image/image/65111486/pewds.0.jpg"
        }
    }

    public async signup(email: string, username: string, password: string) {
        // This is a mock until we get the actual api
        // for ts to shut up about me not using it
        console.log(password)

        this.user = {
            email,
            username,
            profilePictureUrl:
                "https://cdn.vox-cdn.com/thumbor/DD8bzlNVAfCggIXvTTvIiG7m2Xw=/0x0:1200x800/1200x800/filters:focal(396x247:588x439)/cdn.vox-cdn.com/uploads/chorus_image/image/65111486/pewds.0.jpg"
        }
    }

    public async logout() {
        this.user = null
    }

    public reset() {
        this.user = null
    }
}
