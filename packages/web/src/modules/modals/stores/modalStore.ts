import React from "react"
import { Store } from "../../../common/state/types/Store"
import { observable, computed } from "mobx"

export interface ModalProps {
    cancel(): void
}

export type ModalComponent = React.FC<ModalProps>

interface Modal {
    header: ModalComponent
    body: ModalComponent
    footer: ModalComponent
}

export class ModalStore implements Store {
    @observable
    public modalStack = new Array<Modal>()

    @computed
    public get visible() {
        return !!this.modalStack.length
    }

    public reset() {
        this.modalStack = []
    }

    public pop() {
        this.modalStack.pop()
    }

    public spawn(modal: Modal) {
        this.modalStack.push(modal)
    }

    public replace(modal: Modal) {
        this.pop()
        this.spawn(modal)
    }
}
