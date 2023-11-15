export default interface Slide {
	slides: {
        attributes: {
            name: string
            alternativeText: string
            caption: string
            width: number
            height: number
            url: string
            mime: string
        }
    }[]
    wide?: boolean
}