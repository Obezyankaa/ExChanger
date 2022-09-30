import React from 'react';
import ModalLog from '../../UI/ModalLog';
import ModalReg from '../../UI/ModalRegistration';

export default function Main({ regActive, logActive }) {
  return (
    <>
      <div>Main</div>
      <ModalReg regActive={regActive} />
      <ModalLog logActive={logActive} />
    </>
  );
}
