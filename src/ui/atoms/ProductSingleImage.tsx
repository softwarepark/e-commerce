import Image from "next/image";
import React from "react";

type ProductCoverImageProps = {
  src: string;
  alt?: string;
};

const ProductSingleImage = ({ src, alt }: ProductCoverImageProps) => {
  return (
    <div className="bg-white overflow-hidden md:w-1/2 w-full aspect-square flex items-center justify-center relative">
      <Image
        src={src}
        fill
        alt={alt || "Product image"}
        className="aspect-square object-contain object-center"
      />
    </div>
  );
};

export default ProductSingleImage;
