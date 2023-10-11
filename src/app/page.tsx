import { getAllCategories, getAllProducts } from "@/api/products";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { SectionProductList } from "@/ui/organisms/SectionProductList";
import React from "react";

export default async function Home() {
  const count = 4;
  const skip = 0;
  const popularProduct = (await getAllProducts(count, skip)).slice(0, 4);
  const newProduct = (await getAllProducts(count, skip)).slice(-4);
  const categories = (await getAllCategories()).slice(-4);

  return (
    <>
      <SectionProductList
        addTitle={true}
        title="Popular products"
        products={popularProduct}
        numberOfItem={4}
      />
      <CategoriesList categories={categories} title="Popular Categories" />
      <SectionProductList
        addTitle={true}
        title="News Products"
        products={newProduct}
        numberOfItem={4}
      />
    </>
  );
}
