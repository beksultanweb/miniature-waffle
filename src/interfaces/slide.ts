export default interface Slide {
    attributes: {
        name: string
        alternativeText: string
        caption: string | null
        width: number
        height: number
        url: string
        mime: string
    }
}