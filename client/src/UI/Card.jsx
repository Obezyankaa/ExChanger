import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function Card({ product }) {
  const {
    photos, userName, userPhoto, description, productName, price, date, userId, id,
  } = product;
  const [isFavorite, setIsFavorite] = useState();
  useEffect(() => {
    axios.get(`/product/isfavorite/${id}`).then((resp) => setIsFavorite(resp.data));
  }, []);
  const changeFavoriteHandler = () => {
    !isFavorite
      ? axios.put(`/product/favorite/${id}`).then((resp) => setIsFavorite(resp.data))
      : axios.delete(`/product/favorite/${id}`).then((resp) => setIsFavorite(resp.data));
  };
  return (
    <div style={{ margin: '2rem 2rem 0rem 2rem' }}>
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
              {photos.map((el) => (
                <SwiperSlide key={el} style={{ borderRadius: '1rem' }}>
                  <img
                    className="item__img"
                    src={`http://localhost:3001/images/${el}`}
                    alt="..."
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="item__info">
            <h1 className="item__title">{productName}</h1>
            <p className="item__desc" style={{ color: 'aqua' }}>{description}</p>
            <div className="item__price__time">
              <div className="item__price" style={{ alignItems: 'center', display: 'flex' }}>
                {/* <img className="item__icon" style={{ width: '1rem' }} src="https://st3.depositphotos.com/4326917/14193/v/600/depositphotos_141937226-stock-illustration-ruble-sign-dark-green-icon.jpg" alt="ethereum-icon" /> */}
                <span className="price-eth">{price}</span>
                <p style={{ color: 'aqua', margin: '0rem 0rem 0rem 0.5rem' }}>
                  руб/сут
                </p>
              </div>
              <div className="item__time">
                <img className="item__icon" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/icon-clock.svg" alt="clock-icon" />
                <span className="days-left" style={{ color: 'white' }}>{date}</span>
              </div>
            </div>
            <div className="item__creator">
              <img className="creator__img" src={`http://localhost:3001/images/${userPhoto}`} alt="creator_avator" />
              <p className="creator__info" style={{ color: 'aqua' }}>
                <Link className="creator__name" to={`/user/${userId}`}>{userName}</Link>
              </p>
              {console.log(isFavorite)}
              {/* <Checkbox {...label} onChange={changeFavoriteHandler} checked={isFavorite} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
              {/* {console.log(isFavorite)} */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <input className="like" type="checkbox" id="heart" onChange={changeFavoriteHandler} checked={isFavorite} />
                <label htmlFor="heart" />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
