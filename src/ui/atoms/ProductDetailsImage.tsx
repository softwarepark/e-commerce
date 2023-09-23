"use client";
import Image from "next/image";
import { Images } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProductDetailsImage = ({ images }: { images: Images[] }) => {
  return (
    <div className="relative flex h-96 lg:h-[36rem]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alt || "Zdjęcie produktu"}
              className="object-contain h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
