import React from "react";
import { ShoppingBag } from "iconoir-react";

export const Card = () => {
  return (
    <div className="relative flex cursor-pointer">
      <ShoppingBag />
      <span className="inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white bg-blue-500 rounded-full">
        0
      </span>
    </div>
  );
};
