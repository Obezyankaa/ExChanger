import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../../UI/Home/slider/Slider';
import ModalAddProd from '../../UI/ModalAddProd';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';
import './index.css';

export default function Main({
  regActive, logActive, setRegActive, setLogActive, setAddProdActive, addProdActive,
}) {
  const user = useSelector((state) => state.user);
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
            {!user.id
            && (
            <>
              <button onClick={() => setLogActive(true)} type="button" className="btn-padding border-button" style={{ marginRight: '10px' }}>Войти</button>
              <button onClick={() => setRegActive(true)} type="button" className="border-button" style={{ marginLeft: '10px' }}>Регистрация</button>
            </>
            )}
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
