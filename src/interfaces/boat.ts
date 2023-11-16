export default interface Boat {
    id: number
    attributes: {
        title: string
        country_produced: string
        engine: string
        slug: string
        year_produced: string
        media: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}