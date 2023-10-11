import { getAllCategories, getAllProducts } from "@/api/products";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { SectionProductList } from "@/ui/organisms/SectionProductList";
import { SwiperHome } from "@/ui/organisms/SwiperHome";
import React from "react";

export default async function Home() {
  const popularProduct = (await getAllProducts()).slice(0, 4);
  const newProduct = (await getAllProducts()).slice(-4);
  const categories = (await getAllCategories()).slice(-4);

  return (
    <>
      <SectionProductList
        title="Popular products"
        products={popularProduct}
        numberOfItem={4}
      />
      <CategoriesList categories={categories} title="Popular Categories" />
      <SectionProductList
        title="News Products"
        products={newProduct}
        numberOfItem={4}
      />
    </>
  );
}
