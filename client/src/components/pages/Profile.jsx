import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalAddProd from '../../UI/ModalAddProd';
import StarUserRating from '../../UI/StarUserRating';

export default function Profile({ setAddProdActive, addProdActive }) {
  const [btn, setBtn] = useState(true);
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="first-screen-profile">
        <div className="first-screen-profile__body">
          <div className="first-screen-profile__content">
            <div className="first-screen-profile__leftblock">
              <div className="first-screen-profile__leftblock-textarea">
                <p />
                <p>{user.f_name}</p>
                <p>{user.l_name}</p>
                <StarUserRating />
              </div>
              <div className="first-screen-profile__leftblock-skils">
                <p>Свяжитесь с пользователем</p>
              </div>
              <div className="first-screen-profile__leftblock-form">
                <form className="first-screen-profile__form" action="form\thanks\thanks.html">
                  <a className="first-screen-profile__link" href={`https://t.me/${user.telegram}`}>
                    <button type="button">
                      Вы указали профиль
                      {' '}
                      {user.telegram}
                    </button>
                  </a>
                  <>
                    {btn === true ? (
                      <button className="first-screen-profile__btn__profile" onClick={() => setBtn(false)} type="button">Показать номер</button>
                    ) : (
                      <button onClick={() => setBtn(true)} type="button">{user.phone}</button>
                    )}
                  </>
                </form>
              </div>
            </div>
            <div className="first-screen-profile__rightblock">
              <div className="first-screen-profile__rightblock-photo">
                <img src={`http://localhost:3001/images/${user.photo}`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats" id="career">
        <div className="stats__body">
          <div className="stats__content">
            <div className="stats__block">
              <div className="stats__block-one">
                <p>Все товары</p>
              </div>
              <div className="stats__block-two">
                <p>Активные товары</p>
              </div>
              <div className="stats__block-three">
                <p>Избранное</p>
              </div>
              <div className="stats__block-four">
                <p>Отзывы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <></>
      )}
    </>
  );
}
