import type AboutAdvantage from "./aboutAdvantages";
import type { DescriptionBlocks } from "./descriptionBlocks";
import type Image from "./image";

export default interface About {
  id: number;
  attributes: {
    main_description: DescriptionBlocks[];
    description: DescriptionBlocks[];
    description_2: DescriptionBlocks[];
    description_3: DescriptionBlocks[];
    slider: {
      data: Image[];
    };
    about_advantages: {
      data: AboutAdvantage[];
    };
    slot_a: {
      data: {
        id: number;
        attributes: {
          url: string;
          mime: string;
        };
      };
    };
    slot_b: {
      data: {
        id: number;
        attributes: {
          url: string;
          mime: string;
        };
      };
    };
    slot_c: {
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
