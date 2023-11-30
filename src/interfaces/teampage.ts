import type { DescriptionBlocks } from "./descriptionBlocks";
import type Image from "./image";
import type TeamMate from "./team";

export default interface TeamPage {
  id: number;
  attributes: {
    description: DescriptionBlocks[];
    team: {
      data: TeamMate[];
    };
    top: {
      id: number;
      title: string;
      big: boolean;
      media: {
        data: Image;
      };
    };
  };
}
