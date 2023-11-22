import type { DescriptionBlocks } from "./descriptionBlocks";

export default interface TeamPage {
  id: number;
  attributes: {
    description: DescriptionBlocks[];
    slot_a: {
      data: {
        id: number;
        attributes: {
          url: string;
          mime: string;
        };
      };
    };
  };
}
