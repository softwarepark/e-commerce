import React from "react";
import { ProductItemType } from "../types";
import formatMoney from "../../utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

const ProductListItemDescription = ({
  product: { name, price, categories },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="px-2 py-4 w-full">
      <div className="flex justify-between">
        <h3>{name}</h3>
        <p>
          <span className="sr-only">Cena:</span> {formatMoney(price)}
        </p>
      </div>
      <ul className="flex">
        {categories.map((cat, index) => (
          <>
            <li key={index} className="text-neutral-500">
              {cat.name}
            </li>
            <span className="text-neutral-500 last:hidden mr-1">,</span>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ProductListItemDescription;
