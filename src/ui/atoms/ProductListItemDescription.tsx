import React from "react";
import { ProductItemType } from "../types";
import formatMoney from "../../utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

const ProductListItemDescription = ({
  product: { name, price, category },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="px-2 py-4">
      <div className="flex justify-between">
        <h3>{name}</h3>
        <p>
          <span className="sr-only">Cena:</span> {formatMoney(price / 100)}
        </p>
      </div>
      <p className="text-neutral-500">
        <span className="sr-only">Kategoria:</span> {category}
      </p>
    </div>
  );
};

export default ProductListItemDescription;
