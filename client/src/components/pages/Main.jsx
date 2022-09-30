import React from 'react';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';

export default function Main() {
  return (
    <div>
      <ModalRegistration />
      <ModalLog />
    </div>
  );
}
