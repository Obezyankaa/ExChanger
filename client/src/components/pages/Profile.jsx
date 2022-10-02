import React from 'react';
import StarUserRating from '../../UI/StarUserRating';

export default function Profile() {
  return (
    <>
      <div className="first-screen-profile">
        <div className="first-screen-profile__body">
          <div className="first-screen-profile__content">
            <div className="first-screen-profile__leftblock">
              <div className="first-screen-profile__leftblock-textarea">
                <p />
                <p>Успешный</p>
                <p>Человек</p>
                <StarUserRating />
              </div>
              <div className="first-screen-profile__leftblock-skils">
                <p>Свяжитесь с пользователем</p>
              </div>
              <div className="first-screen-profile__leftblock-form">
                <form action="form\thanks\thanks.html">
                  <button type="button">Напишите мне в Telegram</button>
                  <button type="button">Позвоните мне</button>
                </form>
              </div>
            </div>
            <div className="first-screen-profile__rightblock">
              <div className="first-screen-profile__rightblock-photo">
                <img src="" alt="" />
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
    </>
  );
}
