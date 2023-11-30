import type Image from "./image";
import type Service from "./service";
import type AboutAdvantage from "./aboutAdvantages";
import type Boat from "./boat";
import type { DescriptionBlocks } from "./descriptionBlocks";
import type Room from "./room";
import type Advantage from "./advantages";
import type TeamMate from "./team";

export default interface Page {
  attributes: {
    title: string;
    description: string;
    pricePerDay: string;
    slug: string;
    media: {
      data: Image[];
    };

    Sections: {
      id: number;
      __component: string;
      media: {
        data: Image & Image[];
      };
      title: string;
      subtitle: string;
      h1: boolean;
      services: {
        data: Service[];
      };
      about_advantages: {
        data: AboutAdvantage[];
      };
      big: boolean;
      boats: {
        data: Boat[];
      }
      text_blocks: DescriptionBlocks[];
      disablePaddingTop: boolean;
      disablePaddingBottom: boolean;
      room: {
        data: Room[];
      }
      text_advantages: {
        data: Advantage[];
      }
      team: {
        data: TeamMate[];
      }
    }[]
  };
}
