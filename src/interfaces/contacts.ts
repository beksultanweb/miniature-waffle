import type { DescriptionBlocks } from "./descriptionBlocks";

export default interface Contacts {
  id: number;
  attributes: {
    email: string;
    book_phone: string;
    reception_phone: string;
    instagram: string;
    twitter: string;
    telegram: string;
    whatsapp: string;
    how_to_get_there: DescriptionBlocks[];
  };
}
