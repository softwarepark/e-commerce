import React from "react";
import { formatMoney } from "../../utils";
import { ProductGetProductFragment } from "@/gql/graphql";

type ProductSingleDescriptionProps = {
  product: ProductGetProductFragment;
};

const ProductSingleDescription = ({
  product: { name, price, categories, descriptionShort },
}: ProductSingleDescriptionProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="md:text-[2vw] text-base">{name}</h1>
      {price && (
        <p>
          <span className="sr-only">Cena:</span> {formatMoney(price / 100)}
        </p>
      )}
      <p>{descriptionShort}</p>
    </div>
  );
};
export default ProductSingleDescription;
