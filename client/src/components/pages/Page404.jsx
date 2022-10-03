import React from 'react';
import ModalAddProd from '../../UI/ModalAddProd';

export default function Page404({ setAddProdActive, addProdActive }) {
  return (
    <>
      <div className="fourfour">
        <></>
      </div>
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <></>
      )}
    </>
  );
}
