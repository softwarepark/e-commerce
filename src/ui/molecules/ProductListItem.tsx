import React from "react";

import { ProductItemType } from "../types";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";

type ProdcutItemListProps = {
  product: ProductItemType;
};

const ProductListItem = ({ product }: ProdcutItemListProps) => {
  return (
    <li>
      <article className="bg-white w-72">
        <ProductCoverImage
          src={product.coverImage.src}
          alt={product.coverImage.alt}
        />
        <p></p>
        <ProductListItemDescription product={product} />
      </article>
    </li>
  );
};

export default ProductListItem;
