export const getImageUrl = () => {
      return new URL(`assets/${path}`, import.meta.url).href;
};