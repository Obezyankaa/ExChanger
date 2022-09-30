import React, { useState } from 'react';
import Map from '../Map/Map';
import StarUserRating from '../../UI/StarUserRating';
import Days from '../../UI/Days';

export default function ItemPage() {
  const [inputs, setInputs] = useState({ timing: '' });
  console.log(inputs);
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="breadsticks">
        <p>Home</p>
        <p>Handbag</p>
        <p>Label</p>
      </div>
      <div className="first-screen">
        <div className="first-screen__content">
          <div className="first-screen__left">
            <img src="product-image.png" alt="" />
          </div>
          <div className="first-screen__right">
            <div className="first-screen__right-top">
              <p>Coach</p>
              <p>Leather Coach Bag with adjustable starps.</p>
              <StarUserRating />
              <p>$54.69</p>
            </div>
            <div className="first-screen__right-mid">
              <p>Сроки аренды и обмена</p>
              <p>Двигайте ползунок вправо если вам нужно больше времени на аренду или обмен</p>
              <Days changeHandler={changeHandler} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, error beatae? Reiciendis dicta deleniti nisi illo velit mollitia repellendus ipsam enim! Quod earum magni cupiditate eos, dolores error aliquam nulla?</p>
            </div>
            <div className="first-screen__right-bottom">
              <button type="button">Взять в аренду</button>
              <button type="button">Добавить в избранное</button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </>
  );
}
