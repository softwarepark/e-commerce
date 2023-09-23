import React from "react";
import { ProductItemType } from "../types";
import Link from "next/link";
import { formatMoney } from "@/utils";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";

type ProdcutItemListProps = {
  product: ProductItemType;
};

const ProductListItem = async ({ product }: ProdcutItemListProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article className="bg-white flex flex-col items-center">
          <ProductCoverImage
            url={product.images[0].url}
            alt={product.images[0].alt}
          />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};

export default ProductListItem;
