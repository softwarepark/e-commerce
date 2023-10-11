import React, { Suspense } from "react";
import ProductList from "./ProductList";
import LoadingItems from "../molecules/LoadingItems";
import { ProductGetProductFragment } from "@/gql/graphql";

export const SectionProductList = ({
  products,
  title,
  numberOfItem,
}: {
  products: ProductGetProductFragment[];
  title: string;
  numberOfItem: number;
}) => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <div className="relative">
        <h2 className="text-xl font-bold my-7">{title}</h2>
        <div className="w-7 h-1 bg-black absolute bottom-0 left-0" />
      </div>
      <Suspense fallback={<LoadingItems numberOfItem={numberOfItem} />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
};
