export type ProductItemType = {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  coverImage: {
    src: string;
    alt?: string;
  };
};
