import type { DescriptionBlocks } from "./descriptionBlocks"

export default interface TeamPage {
    id: number
    attributes: {
        description: DescriptionBlocks[]
    }
}