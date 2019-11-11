import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { BODY_PADDING } from "../constants"
import { styled } from "../../theming/themes"
import { Button } from "../../../common/design/components/Button"
import { spawnLoginModal } from "../../auth/actions/spawnLoginModal"
import { spawnSignupModal } from "../../auth/actions/spawnSignupModal"

const ProfileImage = styled.img`
    width: ${BODY_PADDING};
    height: ${BODY_PADDING};
    border-radius: calc(${BODY_PADDING} / 2);
`

const HeaderAuthButtons = () => {
    const { modalStore } = useStores()

    return (
        <>
            <Button
                onClick={() => spawnLoginModal(modalStore)}
                variant="primary"
                spaced
            >
                Log in
            </Button>
            <Button
                onClick={() => spawnSignupModal(modalStore)}
                variant="secondary"
                spaced
            >
                Sign up
            </Button>
        </>
    )
}

export const HeaderEnd = () => {
    const { authStore } = useStores()
    const user = useObserver(() => authStore.user)

    return (
        <>
            {user ? (
                <ProfileImage src={user.profilePictureUrl} />
            ) : (
                <HeaderAuthButtons />
            )}
        </>
    )
}
