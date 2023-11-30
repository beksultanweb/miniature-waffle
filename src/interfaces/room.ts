import type Image from "./image";

export default interface Room {
  id: number;
  attributes: {
    title: string;
    description: string;
    pricePerDay: string;
    slug: string;
    media: {
      data: Image[];
    };
  };
}
