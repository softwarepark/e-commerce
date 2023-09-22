"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slider = [
  { title: "Slide 1" },
  { title: "Slide 2" },
  { title: "Slide 3" },
  { title: "Slide 4" },
];

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
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full"
      >
        {slider.map((slide) => (
          <SwiperSlide>
            <div className="flex items-center justify-center w-full h-full bg-neutral-100">
              <h1>{slide.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
