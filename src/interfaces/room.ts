import type Advantage from "./advantages"
import type { DescriptionBlocks } from "./descriptionBlocks"

export default interface Room {
    id: number
    attributes: {
        title: string
        description: string
        pricePerDay: string
        slug: string
        media: {
            data: {
                attributes: {
                    url: string
                }
            }[]
        }
        main_description: DescriptionBlocks[]
        description_2: DescriptionBlocks[]
        description_3: DescriptionBlocks[]
        advantages: {
            data: Advantage[]
        }
        slot_b: {
            data: {
                id: number,
                attributes: {
                    name: string
                    mime: string
                    url: string
                    alternativeText: string | null
                }
            }
        }
        slot_c: {
            data: {
                id: number,
                attributes: {
                    name: string
                    alternativeText: string | null
                    url: string
                    mime: string
                }
            }[]
        }
    }
}