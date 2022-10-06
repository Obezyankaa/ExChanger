/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from '../Map/Map';
import StarUserRating from '../../UI/StarUserRating';
import Days from '../../UI/Days';
import BreadCrumps from '../../UI/BreadCrumps';
import { productArg } from '../../redux/actions/prodItemPageAction';
import Loading from '../../UI/Loading';
import ModalRegistration from '../../UI/ModalRegistration';
import ModalLog from '../../UI/ModalLog';
import { countGradeProd } from '../../redux/actions/gradeProductAction';
import Ucant from '../../UI/Ucant';
import ItemModalRegistration from '../../UI/ItemModalRegistration';
import ItemModalLog from '../../UI/ItemModalLog';
import ModalItemRent from '../../UI/ModalItemRent';
import CommentsModalka from '../../UI/CommentsModalka';

export default function ItemPage({
  night, regActive, setRegActive, logActive, setLogActive,
}) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const argProduct = useSelector((state) => state.prodItemPage);
  console.log(argProduct);
  const { id } = useParams();
  const num = id;
  const [cheker, setChecker] = useState(false);
  const [itemreg, setItemreg] = useState(false);
  const [itemlog, setItemlog] = useState(false);
  const [rent, setRent] = useState(false);
  const [send, setSend] = useState(false);
  const [coment, setComent] = useState(false);
  const [inputs, setInputs] = useState({ timing: 1 });
  const starRating = useSelector((state) => state.gradeProduct);
  useEffect(() => {
    dispatch(countGradeProd(id));
  }, [starRating.state]);

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const priceCalculate = argProduct.price * inputs.timing;
  useEffect(() => {
    dispatch(productArg(id));
  }, []);

  const modalopen = () => {
    setRent(true);
    setChecker(true);
  };

  const commentsModal = () => {
    setComent(true);
  };

  return (
    <>
      <div style={{ marginTop: '2%', marginLeft: '2%' }}>
        <BreadCrumps night={night} itemName={argProduct?.name} category={argProduct?.Category?.name} />
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
                height: '600px',
                width: '600px',
              }}
            >
              {argProduct?.category_id ? (
                argProduct?.ProductPhotos?.map((el) => (
                  <SwiperSlide>
                    <img
                      style={{
                        height: '700px',
                        width: '400px',
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
              <p style={night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{argProduct?.name}</p>
              <p style={night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{argProduct?.Category?.name}</p>
              <StarUserRating star={starRating} />
              {/* <p>{argProduct?.Views.counter}</p> */}
              <p style={night === true ? ({ color: 'black' }) : ({ color: 'white' })}>
                {priceCalculate.toFixed(2)}
                {' '}
                ₽
              </p>
            </div>
            <div className="first-screen__right-mid">
              <p style={night === true ? ({ color: '#626262' }) : ({ color: 'white' })}>
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
              {argProduct.timing
              && <Days changeHandler={changeHandler} inputs={inputs} max={argProduct.timing} />}
              {inputs.timing === 30 ? (
                <p>Слишком мало дней для аренды? Свяжитесь с владельцем</p>)
                : (
                  <></>
                )}
              <b style={{ marginBottom: '1px' }}>Описание:</b>
              <p style={{ marginTop: '1px' }}>{argProduct?.description}</p>

            </div>
            <div className="first-screen__right-comments">
              {coment && <CommentsModalka />}
              <button onClick={commentsModal} type="sybmit">оставить комент</button>
            </div>
            <div className="first-screen__right-bottom">
              {argProduct.user_id !== user.id ? (
                <>
                  {send === true ? (
                    <>
                      <button onClick={modalopen} className="turbobuttons" type="button">Заявка отправлена</button>
                    </>
                  ) : (
                    <>
                      <button onClick={modalopen} className="turbobuttons" type="button">Взять в аренду</button>
                    </>
                  )}
                  <>
                  </>
                  <Button onClick={commentsModal} variant="contained" color="success">
                    Добавить в избранное
                  </Button>
                </>
              ) : (
                <>
                  <Button type="submit" variant="contained" onClick={modalopen}>Изменить данные о товаре</Button>
                  <Button type="submit" variant="contained">Снять с доски</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <Map coordinates={argProduct.location} />
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
      {!user.id && cheker == true ? (
        <Ucant cheker={cheker} setChecker={setChecker} argProduct={argProduct} setItemreg={setItemreg} setItemlog={setItemlog} />
      ) : (
        <></>
      )}
      {itemreg === true ? (
        <ItemModalRegistration setItemreg={setItemreg} setRent={setRent} />
      ) : (
        <></>
      )}
      {itemlog === true ? (
        <ItemModalLog setItemlog={setItemlog} setRent={setRent} />
      ) : (
        <></>
      )}
      {user.id && rent == true ? (
        <ModalItemRent input={inputs} id={num} setRent={setRent} setSend={setSend} />
      ) : (
        <></>
      )}
    </>
  );
}
