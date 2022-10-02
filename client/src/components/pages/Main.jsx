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
  );
}
