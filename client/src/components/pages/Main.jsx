import React from 'react';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';

export default function Main({
  regActive, logActive, setRegActive, setLogActive,
}) {
  return (
    <>
      <div>Main</div>
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
