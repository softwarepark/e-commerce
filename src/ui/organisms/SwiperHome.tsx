"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slider = [{ url: "/slide.jpg" }, { url: "/slide2.jpg" }];

export const SwiperHome = () => {
  return (
    <div className="relative flex h-96 w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        direction={"vertical"}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full"
      >
        {slider.map((slide) => (
          <SwiperSlide>
            <div className="flex items-center justify-center w-full h-full">
              <Image src={slide.url} alt="" fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
