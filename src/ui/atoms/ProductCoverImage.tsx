import Image from "next/image";
import React from "react";

type ProductCoverImageProps = {
  src: string;
  alt?: string;
};

const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
  return (
    <div className="overflow-hidden w-72 flex items-center justify-center">
      <Image
        src={src}
        width={300}
        height={300}
        alt={alt || "Product cover image"}
        className="aspect-square object-contain object-center hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default ProductCoverImage;
