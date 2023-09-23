import React from "react";
import { CategoriesItemType } from "../types";
import Image from "next/image";

export const CategoryListItems = async ({
  categories,
}: {
  categories: CategoriesItemType[];
}) => {
  return (
    <ul className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {categories.map((category, index) => (
        <li key={index} className="w-full space-y-2">
          <div className="overflow-hidden rounded-md w-full relative">
            <Image
              src={category.image.url}
              width={category.image.width}
              height={category.image.height}
              alt=""
              className="object-cover h-72 w-full hover:scale-105 ease-in-out transition-all duration-300"
            />
          </div>
          <h3 className="font-medium">{category.name}</h3>
        </li>
      ))}
    </ul>
  );
};
