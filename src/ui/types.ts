export type Images = {
  url: string;
  alt?: string;
  height: number;
  width: number;
};

export type Categories = {
  name: string;
  id: string;
  slug: string;
};

export type ProductItemType = {
  id: string;
  name: string;
  slug: string;
  descriptionShort: string;
  images: Images[];
  price: number;
  categories: Categories[];
  promotion?: number;
};

export type CategoriesItemType = {
  id: string;
  name: string;
  slug: string;
  image: Images;
};
