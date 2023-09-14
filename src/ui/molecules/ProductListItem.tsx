import React from "react";
import { ProductItemType } from "../types";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import Link from "next/link";

type ProdcutItemListProps = {
  product: ProductItemType;
};

const ProductListItem = ({ product }: ProdcutItemListProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article className="bg-white w-72">
          <ProductCoverImage
            src={product.coverImage.src}
            alt={product.coverImage.alt}
          />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};

export default ProductListItem;
