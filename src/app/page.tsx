import React from "react";
import ProductList from "../ui/organisms/ProductList";
import { ProductItemType } from "../ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    name: "Plecak",
    price: 2999,
    category: "Akcesoria",
    coverImage: {
      src: "/backpack.jpg",
      alt: "Plecak",
    },
  },
  {
    id: "2",
    name: "Kubek",
    price: 1099,
    category: "Akcesoria",
    coverImage: {
      src: "/mug.jpg",
      alt: "Kubek",
    },
  },
  {
    id: "3",
    name: "Czapka",
    price: 1099,
    category: "Akcesoria",
    coverImage: {
      src: "/snapback.jpg",
      alt: "Czapka",
    },
  },
  {
    id: "3",
    name: "Bluza",
    price: 10099,
    category: "Akcesoria",
    coverImage: {
      src: "/unisex_long_sleeve_tee.jpg",
      alt: "Czapka",
    },
  },
];

export default function Home() {
  return (
    <section className="mx-auto flex justify-center px-5 my-7">
      <ProductList products={products} />
    </section>
  );
}
