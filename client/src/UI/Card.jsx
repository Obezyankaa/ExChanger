import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function Card() {
  return (
    <div>
      <main>
        <article className="card">
          <div className="item__img__container">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              loop
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="item__img" src="../../img/image.png" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <img className="item__img" src="../../img/image2.png" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <img className="item__img" src="../../img/image3.png" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <img className="item__img" src="../../img/image4.png" alt="..." />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="item__info">
            <h1 className="item__title">Equilibrium #3429</h1>
            <p className="item__desc">Our Equilibrium collection promotes balance and calm.</p>
            <div className="item__price__time">
              <div className="item__price">
                <img className="item__icon" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/icon-ethereum.svg" alt="ethereum-icon" />
                <span className="price-eth">0.041 ETH</span>
              </div>
              <div className="item__time">
                <img className="item__icon" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/icon-clock.svg" alt="clock-icon" />
                <span className="days-left" style={{ color: 'white' }}>3 days left</span>
              </div>
            </div>
            <div className="item__creator">
              <img className="creator__img" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/image-avatar.png" alt="creator_avator" />
              <p className="creator__info">
                Creation of
                {' '}
                <Link className="creator__name" to="/">Jules Wyvern</Link>
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
