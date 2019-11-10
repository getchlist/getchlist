import React from "react"
import { Store } from "../../../common/state/types/Store"
import { observable, computed } from "mobx"
import { Theme } from "../../theming/types/Theme"

export interface ModalProps {
    cancel(): void
}

export type ModalComponent = React.FC<ModalProps>

interface Modal {
    title: string
    body: ModalComponent

    key?: string
    variant?: keyof Theme["colors"]

    callback?: () => void
}

export class ModalStore implements Store {
    @observable
    public modalStack = new Array<Modal>()

    @computed
    public get visible() {
        return !!this.modalStack.length
    }

    @computed
    public get currentModal() {
        return this.visible ? this.modalStack[this.modalStack.length - 1] : null
    }

    public pop() {
        const popped = this.modalStack.pop()

        if (popped && popped.callback) {
            popped.callback()
        }
    }

    public reset() {
        this.modalStack = []
    }

    public spawn(modal: Modal) {
        this.modalStack.push(modal)
    }

    public replace(modal: Modal) {
        this.pop()
        this.spawn(modal)
    }
}
