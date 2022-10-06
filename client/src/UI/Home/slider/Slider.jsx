/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Marquee from 'react-fast-marquee';
import './slider.css';
import { useSelector } from 'react-redux';
import SliderItem from '../../SliderItem';

export default function Slider() {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <div className="slider-container">
        <Marquee>
          {categories?.map((item) => (
            <SliderItem item={item} key={item.id} />
          ))}
        </Marquee>
      </div>
    </>
  );
}
