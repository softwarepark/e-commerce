import React from "react";
import ProductList from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";

export default async function Products({
  params: { pagination },
}: {
  params: { pagination: number };
}) {
  const length = 4;
  const offset = pagination * 4;

  const products = await getProductsList(length, offset);

  return (
    <section className="mx-auto flex flex-col justify-center px-5 my-7">
      <ProductList products={products} />
      <Pagination paginationLenght={10} currentPagination={0} />
    </section>
  );
}
