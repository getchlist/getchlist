import { observable } from "mobx"
import { Store } from "../../../common/state/types/Store"

export enum pageCategory {
    home,
    docs,
    explore
}

export interface PageMetadata {
    title: string
    description: string
    category: pageCategory
}

const initialMetadata: PageMetadata = {
    title: "",
    category: pageCategory.home,
    description: "Compose configs with ease"
}

export class MetadataStore implements Store {
    @observable public metadata = initialMetadata

    public reset() {
        this.metadata = initialMetadata
    }

    public setMetadata(metadata: Partial<PageMetadata>, preserveOld = false) {
        const defaultMetadata = preserveOld ? this.metadata : initialMetadata

        this.metadata = {
            ...defaultMetadata,
            ...metadata
        }
    }
}
