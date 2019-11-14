import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { AbsoluteLayer } from "../../../common/design/components/Layer"
import { useObserver } from "mobx-react-lite"
import { getTransparency } from "../../theming/helpers"
import { styled } from "../../theming/themes"
import { Center } from "../../../common/design/components/Center"
import { Spaced } from "../../../common/design/components/Spaced"
import { ModalContent } from "./ModalContent"
import { ModalContext, Modal } from "./ModalContext"

const ModalBackgroud = styled(AbsoluteLayer)`
    background-color: ${getTransparency("positive")};
`

const ModalBodyContainer = styled(Spaced)`
    flex-grow: 1;
    min-width: 40vw;
    box-sizing: border-box;
`

const ModalHeader = styled(Spaced)`
    font-size: 2em;
`

export const ModalRenderer = () => {
    const { modalStore } = useStores()
    const CurrentModal = useObserver(() => modalStore.currentModal)

    if (CurrentModal === null) {
        return null
    }

    const dimiss = modalStore.pop

    const modal: Modal = {
        dimiss
    }

    return (
        <ModalBackgroud
            key={CurrentModal.key || CurrentModal.title}
            zIndex={2}
            onClick={dimiss}
        >
            <Center>
                <ModalContent
                    onClick={e => {
                        e.stopPropagation()
                    }}
                    variant={CurrentModal.variant || "primary"}
                >
                    <ModalHeader>{CurrentModal.title}</ModalHeader>

                    <ModalBodyContainer>
                        <ModalContext.Provider value={modal}>
                            <CurrentModal.body />
                        </ModalContext.Provider>
                    </ModalBodyContainer>
                </ModalContent>
            </Center>
        </ModalBackgroud>
    )
}
