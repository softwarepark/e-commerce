import formatMoney from "@/utils";
import { ProductItemType } from "../types";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";

export const ProductDetails = ({ product }: { product: ProductItemType }) => {
  const { name, price, images } = product;

  return (
    <article className="w-full flex flex-col gap-10">
      <ProductDetailsImage images={images} />
      <div className="text-center">
        <h1>{name}</h1>
        <p>{formatMoney(price)}</p>
      </div>
    </article>
  );
};
