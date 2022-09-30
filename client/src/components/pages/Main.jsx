import React from 'react';
import Slider from '../../UI/Home/slider/Slider';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';

export default function Main({
  regActive, logActive, setRegActive, setLogActive,
}) {
  return (
    <>
      <div>
        {/* <img src="../../../img/hero.jpg" alt="..." className="img_home" /> */}
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
    </>
  );
}
