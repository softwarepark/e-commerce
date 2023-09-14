import React from "react";
import LoadingItem from "@/ui/atoms/LoadingItem";

const LoadingItems = ({ numberOfItem }: { numberOfItem: number }) => {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {[...Array(numberOfItem)].map((_, i) => (
        <LoadingItem key={i} />
      ))}
    </ul>
  );
};

export default LoadingItems;
