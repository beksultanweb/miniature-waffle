export default interface Image {
  id: number;
  attributes: {
    url: string;
    mime: string;
    alternativeText: string;
  };
}