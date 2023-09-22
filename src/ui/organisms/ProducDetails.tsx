import formatMoney from "@/utils";
import { ProductItemType } from "../types";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";

export const ProductDetails = ({ product }: { product: ProductItemType }) => {
  const { name, price, images } = product;

  return (
    <article className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
      <ProductDetailsImage images={images} />
      <div>
        <h1>{name}</h1>
        <p>{formatMoney(price)}</p>
      </div>
    </article>
  );
};
