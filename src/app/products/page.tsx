import React from "react";
import ProductList from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function Products() {
  const products = await getProductsList();
  return (
    <section className="mx-auto flex justify-center px-5 my-7">
      <ProductList products={products} />
    </section>
  );
}
