import { observable } from "mobx"

export type pageCategory = "home" | "expore" | "docs"

export interface PageMetadata {
    title: string
    description: string
    category: pageCategory
}

export class MetadataStore {
    @observable public metadata = {}
}
