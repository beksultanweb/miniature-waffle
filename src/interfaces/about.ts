import type { DescriptionBlocks } from "./descriptionBlocks"

export default interface About {
    id: number
    attributes: {
        description: DescriptionBlocks[]
        description_2: DescriptionBlocks[]
        about_advantages: {
            data: {
                id: number
                attributes: {
                    title: string
                    image: {
                        data: {
                            attributes: {
                                url: string
                                mime: string
                            }
                        }
                    }
                }
            }[]
        }
    }
}