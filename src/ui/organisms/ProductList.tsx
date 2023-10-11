import React from "react";
import ProductListItem from "../molecules/ProductListItem";
import { ProductGetProductFragment } from "@/gql/graphql";

const ProductList = ({
  products,
}: {
  products: ProductGetProductFragment[];
}) => {
  return (
    <ul
      data-testid="products-list"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
