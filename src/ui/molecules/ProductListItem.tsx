import React from "react";
import Link from "next/link";
import { formatMoney } from "@/utils";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import { ProductGetProductFragment } from "@/gql/graphql";

type ProdcutItemListProps = {
  product: ProductGetProductFragment;
};

const ProductListItem = async ({ product }: ProdcutItemListProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article className="bg-white flex flex-col items-center">
          {product.images[0] && (
            <ProductCoverImage
              url={product.images[0].url}
              alt={product.images[0].alt || ""}
            />
          )}
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};

export default ProductListItem;
