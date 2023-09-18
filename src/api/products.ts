import { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

const productResponseItemToProductItemType = (
  product: ProductResponseItem
): ProductItemType => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    coverImage: {
      src: product.image,
      alt: product.title,
    },
  };
};

export const getProductsList = async (lenght: number, offset: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${lenght}&offset=${offset}`
  );
  const productsResponse = (await res.json()) as ProductResponseItem[];
  const products = productsResponse.map((product) =>
    productResponseItemToProductItemType(product)
  );
  return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`
  );
  const productResponse = (await res.json()) as ProductResponseItem;
  return productResponseItemToProductItemType(productResponse);
};
