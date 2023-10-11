import React, { Suspense } from "react";
import LoadingItems from "../molecules/LoadingItems";
import { CategoryListItems } from "../molecules/CategoryListItems";
import { CategoryGetCateogryFragment } from "@/gql/graphql";

export const CategoriesList = ({
  categories,
  title,
}: {
  categories: CategoryGetCateogryFragment[];
  title: string;
}) => {
  return (
    <article className="w-full">
      <div className="flex flex-col gap-y-10 w-full">
        <div className="relative">
          <h2 className="text-xl font-bold my-7">{title}</h2>
          <div className="w-7 h-1 bg-black absolute bottom-0 left-0" />
        </div>
        <Suspense fallback={<LoadingItems numberOfItem={5} />}>
          <CategoryListItems categories={categories} />
        </Suspense>
      </div>
    </article>
  );
};
