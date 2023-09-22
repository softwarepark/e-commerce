import { getAllProducts } from "@/api/products";
import { SectionProductList } from "@/ui/organisms/SectionProductList";
import { SwiperHome } from "@/ui/organisms/SwiperHome";
import React from "react";

export default async function Home() {
  const popularProduct = (await getAllProducts()).slice(0, 4);
  const newProduct = (await getAllProducts()).slice(-4);

  return (
    <>
      <SwiperHome />

      <SectionProductList
        title="Popularne produkty"
        products={popularProduct}
        numberOfItem={4}
      />

      <SectionProductList
        title="Nowości"
        products={newProduct}
        numberOfItem={4}
      />
    </>
  );
}
