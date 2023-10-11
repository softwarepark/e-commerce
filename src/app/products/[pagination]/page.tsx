import React from "react";
import { Pagination } from "@/ui/molecules/Pagination";
import { getAllProducts } from "@/api/products";
import { SectionProductList } from "@/ui/organisms/SectionProductList";

export default async function Products({
  params: { pagination },
}: {
  params: { pagination: number };
}) {
  const count = 8;
  const skip = (pagination - 1) * count;
  const products = await getAllProducts(count, skip);
  const paginationLenght = products.length / count;

  return (
    <section className="w-full">
      <SectionProductList
        addTitle={true}
        title="Wszystkie produkty"
        products={products}
        numberOfItem={8}
      />
      <Pagination paginationLenght={2} currentPagination={0} />
    </section>
  );
}
