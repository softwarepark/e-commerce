import { CategoryGetCateogryFragment } from "@/gql/graphql";
import Image from "next/image";
import React from "react";

export const PageHeader = ({
  category,
}: {
  category: CategoryGetCateogryFragment;
}) => {
  return (
    <div className="w-full h-96 rounded-xl relative overflow-hidden  p-5 flex items-end">
      <Image
        src={category.image.url}
        fill
        alt={category.image.alt || ""}
        className="object-cover -z-10"
      />
      <div className="space-y-4 z-50 text-white">
        <h1 className="font-medium text-6xl">{category.name}</h1>
        <p>{category.description}</p>
      </div>
    </div>
  );
};
