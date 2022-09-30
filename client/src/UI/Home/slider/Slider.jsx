/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
// Import Swiper styles
import 'swiper/css';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}
