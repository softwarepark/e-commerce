import React from "react";
import Image from "next/image";
import { CategoryGetCateogryFragment } from "@/gql/graphql";
import Link from "next/link";
import ActiveLink from "../atoms/ActiveLink";
import { Route } from "next";

export const CategoryListItems = async ({
  categories,
}: {
  categories: CategoryGetCateogryFragment[];
}) => {
  return (
    <ul className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {categories.map((category, index) => (
        <li key={index} className="w-full space-y-2">
          <Link href={`/category/${category.slug}` as Route}>
            <div className="overflow-hidden rounded-md w-full relative">
              <Image
                src={category.image.url}
                width={category.image.width || undefined}
                height={category.image.height || undefined}
                alt=""
                className="object-cover h-72 w-full hover:scale-105 ease-in-out transition-all duration-300"
              />
            </div>
            <h3 className="font-medium">{category.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
