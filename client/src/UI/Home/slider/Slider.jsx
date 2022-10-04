/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import './slider.css';
import { useSelector } from 'react-redux';

export default function Slider() {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <h2>Категории</h2>
      {categories[0] ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          style={{ zIndex: '0' }}
          autoplay
        >
          {categories?.map((el) => (
            <SwiperSlide key={el.id}>
              {/* инлайн стиль на бекграунд не работатет */}
              {el.name}
              {' '}
              <img src={`http://localhost:3001/photos-category/${el.photo}`} alt={el.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <></>
      )}
    </>
  );
}
