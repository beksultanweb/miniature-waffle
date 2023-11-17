import type { DescriptionBlocks } from "./descriptionBlocks"
import type Slide from "./slide"

export default interface About {
    id: number
    attributes: {
        description: DescriptionBlocks[]
        description_2: DescriptionBlocks[]
        description_3: DescriptionBlocks[]
        slider: {
            data: Slide[]
        }
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