import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { BODY_PADDING } from "../constants"
import { styled } from "../../theming/themes"
import { Button } from "../../../common/design/components/Button"
import { spawnLoginModal } from "../../auth/actions/spawnLoginModal"
import { spawnSignupModal } from "../../auth/actions/spawnSignupModal"
import { getDuration } from "../../theming/helpers"

const ProfileImage = styled.img`
    width: ${BODY_PADDING};
    height: ${BODY_PADDING};

    transition: border-radius ${getDuration("short")},
        transform ${getDuration("short")};
    border-radius: calc(${BODY_PADDING} / 2);

    &:hover {
        border-radius: calc(${BODY_PADDING} / 4);
        transform: scale(1.2, 1.2);
    }
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
