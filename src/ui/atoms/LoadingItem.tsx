import React from "react";

export const LoadingItem = () => {
  return (
    <li className="space-y-3 animate-pulse">
      <div className="w-full h-64 bg-neutral-200" />
      <div className="w-full h-4 bg-neutral-200" />
      <div className="w-full h-4 bg-neutral-200" />
    </li>
  );
};

export default LoadingItem;
