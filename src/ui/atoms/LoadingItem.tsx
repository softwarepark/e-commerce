import React from "react";

const LoadingItem = () => {
  return (
    <li className="space-y-3 animate-pulse">
      <div className="w-full h-36 bg-neutral-200" />
      <div className="w-full h-4 bg-neutral-200" />
      <div className="w-full h-4 bg-neutral-200" />
    </li>
  );
};

export default LoadingItem;
