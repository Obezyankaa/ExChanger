import React from 'react';
import Slider from '../../UI/Home/slider/Slider';
import ModalAddProd from '../../UI/ModalAddProd';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';

export default function Main({
  regActive, logActive, setRegActive, setLogActive, setAddProdActive, addProdActive,
}) {
  return (
    <>
      <div className="intro">
        <div className="intro__media">
          <video src="12.mp4" autoPlay muted loop />
        </div>
        <div className="intro__content">
          <p>ExChanger</p>
          <p>Доступный шеринг для обычных людей</p>
          <div className="intro__content-btn">
            <button>Войти</button>
            <button>Регистрация</button>
          </div>
        </div>
      </div>
      <>
        <div>
          <Slider />
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
        {addProdActive === true ? (
          <ModalAddProd setAddProdActive={setAddProdActive} />
        ) : (
          <></>
        )}
      </>
    </>
  );
}
