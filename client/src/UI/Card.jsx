import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function Card({ product }) {
  const {
    photos, userName, userPhoto, description, productName, price, date, userId,
  } = product;
  console.log(photos, '========');
  // const [isFavorite, setIsFavorite] = useState();
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
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                  Indeterminate checkbox
                </label>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
