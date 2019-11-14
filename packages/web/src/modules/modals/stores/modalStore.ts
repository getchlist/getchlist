import React from "react"
import { Store } from "../../../common/state/types/Store"
import { observable, computed, action } from "mobx"
import { Theme } from "../../theming/types/Theme"

interface ModalConfig {
    title: string
    body: React.ComponentType

    key?: string
    variant?: keyof Theme["colors"]

    callback?: () => void
}

export class ModalStore implements Store {
    @observable
    public modalStack: ModalConfig[] = []

    @computed
    public get visible() {
        return !!this.modalStack.length
    }

    @computed
    public get currentModal() {
        return this.visible ? this.modalStack[this.modalStack.length - 1] : null
    }

    @action.bound
    public pop() {
        const popped = this.modalStack.pop()

        if (popped && popped.callback) {
            popped.callback()
        }
    }

    @action
    public reset() {
        this.modalStack = []
    }

    @action
    public spawn(modal: ModalConfig) {
        this.modalStack.push(modal)
    }

    @action
    public replace(modal: ModalConfig) {
        this.pop()
        this.spawn(modal)
    }
}
