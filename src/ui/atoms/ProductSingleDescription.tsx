import React from "react";

import { ProductItemType } from "../types";
import formatMoney from "../../utils";

type ProductSingleDescriptionProps = {
  product: ProductItemType;
};

const ProductSingleDescription = ({
  product: { name, price, category, description },
}: ProductSingleDescriptionProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="md:text-[2vw] text-base">{name}</h1>
      <h3 className="px-2 py-1 bg-orange-400 text-white text-xs w-fit rounded-lg">
        {category}
      </h3>
      <p>
        <span className="sr-only">Cena:</span> {formatMoney(price / 100)}
      </p>
      <p>{description}</p>
    </div>
  );
};
export default ProductSingleDescription;
