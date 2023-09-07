import React from "react";
import ProductListItem from "@/ui/molecules/ProductListItem";
import { ProductItemType } from "../types";

const ProductList = ({ products }: { products: ProductItemType[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
