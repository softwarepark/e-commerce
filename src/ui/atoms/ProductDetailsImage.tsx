"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductGetProductFragment } from "@/gql/graphql";

export const ProductDetailsImage = ({
  images,
}: {
  images: ProductGetProductFragment["images"];
}) => {
  return (
    <div className="relative flex h-96 lg:h-[36rem]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.url}
              width={image.width || 0}
              height={image.height || 0}
              alt={image.alt || "Zdjęcie produktu"}
              className="object-contain h-full mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
