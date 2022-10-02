import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Map from '../Map/Map';
import StarUserRating from '../../UI/StarUserRating';
import Days from '../../UI/Days';
import BreadCrumps from '../../UI/BreadCrumps';

export default function ItemPage() {
  const [inputs, setInputs] = useState({ timing: 1 });
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const priceCalculate = 54.69 * inputs.timing;
  return (
    <>
      <div style={{ marginTop: '2%', marginLeft: '2%' }}>
        <BreadCrumps />
      </div>
      <div className="first-screen">
        <div className="first-screen__content">
          <div className="first-screen__left">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              loop
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <SwiperSlide>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  src="https://www.smsm.ru/upload/ammina.optimizer/jpg/q80/articles/Impulsnaya%20drel.jpg"
                  alt="..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  src="https://www.smsm.ru/upload/ammina.optimizer/jpg/q80/articles/Impulsnaya%20drel.jpg"
                  alt="..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.smsm.ru/upload/ammina.optimizer/jpg/q80/articles/Impulsnaya%20drel.jpg" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://www.smsm.ru/upload/ammina.optimizer/jpg/q80/articles/Impulsnaya%20drel.jpg" alt="..." />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="first-screen__right">
            <div className="first-screen__right-top">
              <p>Coach</p>
              <p>Leather Coach Bag with adjustable starps.</p>
              <StarUserRating />
              <p>
                {priceCalculate.toFixed(2)}
                {' '}
                руб.
              </p>
            </div>
            <div className="first-screen__right-mid">
              <p>
                Сроки аренды и обмена
                {inputs.timing.toString().slice(-1).includes('1') && inputs.timing.toString() !== '11' ? (
                  <>
                    {' '}
                    {inputs.timing}
                    {' '}
                    день
                  </>
                ) : (
                  <>
                    {' '}
                    {inputs.timing}
                    {' '}
                    дней
                  </>
                )}
              </p>
              <p>Двигайте ползунок вправо если вам нужно больше времени на аренду или обмен</p>
              <Days changeHandler={changeHandler} inputs={inputs} />
              {inputs.timing === 30 ? (
                <p>Слишком мало дней для аренды? Свяжитесь с владельцем</p>)
                : (
                  <></>
                )}
              <p>Lorem, ipsum dolor sit amet consectetur</p>
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
