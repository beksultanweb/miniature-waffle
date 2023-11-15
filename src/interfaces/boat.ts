export default interface Boat {
    id: number
    attributes: {
        title: string
        country_produced: string
        engine: string
        year_produced: string
        images: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}