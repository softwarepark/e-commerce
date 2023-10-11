import React from "react";
import ProductList from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getAllProducts } from "@/api/products";
import { SectionProductList } from "@/ui/organisms/SectionProductList";
import LoadingItems from "@/ui/molecules/LoadingItems";

export default async function Products({
  params: { pagination },
}: {
  params: { pagination: number };
}) {
  const products = await getAllProducts();

  return (
    <section className="w-full">
      <SectionProductList
        title="Popularne produkty"
        products={products}
        numberOfItem={8}
      />
      <Pagination paginationLenght={3} currentPagination={0} />
    </section>
  );
}
