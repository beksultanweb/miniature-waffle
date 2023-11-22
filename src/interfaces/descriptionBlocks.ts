interface Paragraph {
  children: {
    type: string;
    text: string;
    underline?: boolean;
    bold?: boolean;
  }[];
  type: string;
}

interface Heading {
  children: {
    type: string;
    text: string;
  }[];
  level: number;
  type: string;
}

interface List {
  children: {
    children: {
      type: string;
      text: string;
    }[];
  }[];
  type: string;
}

export type DescriptionBlocks = Paragraph & Heading & List;
