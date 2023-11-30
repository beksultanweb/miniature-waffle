import type Image from "./image";

export default interface AboutAdvantage {
    id: number;
    attributes: {
        title: string;
        image: {
            data: Image;
        }
    };
}
  