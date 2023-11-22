export default interface mainSlider {
  id: number;
  attributes: {
    media: {
      data: {
        attributes: {
          url: string;
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          mime: string;
        };
      }[];
    };
  };
}
