import { observable } from "mobx"
import { Store } from "../../../common/state/types/Store"

export enum pageCategorires {
    home,
    docs,
    explore
}

export interface PageMetadata {
    title: string
    description: string
    category: pageCategorires
}

const initialMetadata: PageMetadata = {
    title: "",
    category: pageCategorires.home,
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
