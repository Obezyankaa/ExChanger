import React, { memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
// import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import StarUserRating from '../../UI/StarUserRating';
import Days from '../../UI/Days';
import BreadCrumps from '../../UI/BreadCrumps';
import { productArg } from '../../redux/actions/prodItemPageAction';
import Loading from '../../UI/Loading';
import ModalRegistration from '../../UI/ModalRegistration';
import ModalLog from '../../UI/ModalLog';

function ItemPage({
  regActive, setRegActive, logActive, setLogActive,
}) {
  const dispatch = useDispatch();
  const argProduct = useSelector((state) => state.prodItemPage);

  const [inputs, setInputs] = useState({ timing: 1 });
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const priceCalculate = argProduct.price * inputs.timing;
  useEffect(() => {
    dispatch(productArg(5));
  }, []);
  return (
    <>
      <div style={{ marginTop: '2%', marginLeft: '2%' }}>
        <BreadCrumps itemName={argProduct?.name} category={argProduct?.Category?.name} />
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
                height: '700px',
                width: '700px',
              }}
            >
              {argProduct.category_id ? (
                argProduct?.ProductPhotos?.map((el) => (
                  <SwiperSlide>
                    <img
                      style={{
                        height: '700px',
                        width: '700px',
                      }}
                      src={`http://localhost:3001/images/${Object.values(el)[0]}`}
                      alt={`${el[0]}`}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <Loading />
              )}

            </Swiper>
          </div>
          <div className="first-screen__right">
            <div className="first-screen__right-top">
              <p>{argProduct?.name}</p>
              <p>{argProduct?.Category?.name}</p>
              <StarUserRating />
              <p>
                {priceCalculate.toFixed(2)}
                руб.
              </p>
            </div>
            <div className="first-screen__right-mid">
              <p>
                Максимальный срок аренды:
                {' '}
                {argProduct?.timing}
                {argProduct?.timing?.toString().slice(-1).includes('1') && argProduct?.timing.toString() !== '11' ? (
                  <>
                    {' '}
                    день
                  </>
                ) : (
                  <>
                    {' '}
                    дней
                  </>
                )}
              </p>
              <p>Двигайте ползунок вправо если вам нужно больше времени на аренду</p>
              <Days changeHandler={changeHandler} inputs={inputs} max={argProduct?.timing} />
              {inputs.timing === 30 ? (
                <p>Слишком мало дней для аренды? Свяжитесь с владельцем</p>)
                : (
                  <></>
                )}
              <b style={{ marginBottom: '1px' }}>Описание:</b>
              <p style={{ marginTop: '1px' }}>{argProduct?.description}</p>

            </div>
            <div className="first-screen__right-bottom">
              <button className="turbobuttons" type="button">Взять в аренду</button>
              <button className="turbobuttons" type="button">Добавить в избранное</button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        {/* <Map /> */}
      </div>
      {regActive === true ? (
        <ModalRegistration setRegActive={setRegActive} />
      ) : (
        <></>
      )}
      {logActive === true ? (
        <ModalLog setLogActive={setLogActive} />
      ) : (
        <></>
      )}
    </>
  );
}

export default memo(ItemPage);
