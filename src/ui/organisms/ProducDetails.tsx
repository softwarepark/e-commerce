import { formatMoney } from "@/utils";

import { ProductDetailsImage } from "../atoms/ProductDetailsImage";
import { ProductGetProductFragment } from "@/gql/graphql";

export const ProductDetails = ({
  product,
}: {
  product: ProductGetProductFragment;
}) => {
  return (
    <article className="w-full flex flex-col gap-10">
      <ProductDetailsImage images={product.images} />
      <div className="text-center">
        <h1>{product.name}</h1>
        <p>{formatMoney(product.price || 0)}</p>
      </div>
    </article>
  );
};
