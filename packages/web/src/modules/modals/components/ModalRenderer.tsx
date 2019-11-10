import React from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { Layer } from "../../../common/design/components/Layer"
import { useObserver } from "mobx-react-lite"
import { getTransparency } from "../../theming/helpers"
import { styled } from "../../theming/themes"
import { Center } from "../../../common/design/components/Center"
import { ModalContent } from "./ModalContent"
import { Spaced } from "../../../common/design/components/Spaced"

const ModalBackgroud = styled(Layer)`
    background-color: ${getTransparency("positive")};
`

const ModalBodyContainer = styled(Spaced)`
    flex-grow: 1;
`

const ModalHeader = styled(Spaced)`
    font-size: 2em;
`

export const ModalRenderer = () => {
    const { modalStore } = useStores()
    const Modal = useObserver(() => modalStore.currentModal)

    if (Modal === null) {
        return null
    }

    const cancel = modalStore.pop.bind(modalStore)

    return (
        <ModalBackgroud
            key={Modal.key || Modal.title}
            zIndex={2}
            onClick={cancel}
        >
            <Center>
                <ModalContent
                    onClick={e => {
                        e.stopPropagation()
                    }}
                    variant={Modal.variant || "primary"}
                >
                    <ModalHeader>{Modal.title}</ModalHeader>

                    <ModalBodyContainer>
                        <Modal.body cancel={cancel} />
                    </ModalBodyContainer>
                </ModalContent>
            </Center>
        </ModalBackgroud>
    )
}
