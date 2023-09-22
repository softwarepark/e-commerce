type Images = {
  url: string;
  alt?: string;
  height: number;
  width: number;
};

type Categories = {
  name: string;
  id: string;
  slug: string;
};

export type ProductItemType = {
  id: string;
  name: string;
  descriptionShort: string;
  images: Images[];
  price: number;
  categories: Categories[];
  promotion?: number;
};
