import React from "react";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";
import { ProductItemType } from "../types";

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
        <ProductListItemDescription product={product} />
      </article>
    </li>
  );
};

export default ProductListItem;
