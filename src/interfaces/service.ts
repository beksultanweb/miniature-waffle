export default interface Service {
    id: number,
    attributes: {
        Title: string
        Thumbnail: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}