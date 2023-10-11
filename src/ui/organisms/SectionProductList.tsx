import React, { Suspense } from "react";
import ProductList from "./ProductList";
import LoadingItems from "../molecules/LoadingItems";
import { ProductGetProductFragment } from "@/gql/graphql";
import clsx from "clsx";

export const SectionProductList = ({
  products,
  title,
  numberOfItem,
  addTitle,
}: {
  products: ProductGetProductFragment[];
  title: string;
  numberOfItem: number;
  addTitle?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <div className={clsx(`relative`, addTitle ? `block` : `hidden`)}>
        <h2 className="text-xl font-bold my-7">{title}</h2>
        <div className="w-7 h-1 bg-black absolute bottom-0 left-0" />
      </div>
      {products.length > 0 ? (
        <Suspense fallback={<LoadingItems numberOfItem={numberOfItem} />}>
          <ProductList products={products} />
        </Suspense>
      ) : (
        <p>Brak produktów</p>
      )}
    </div>
  );
};
