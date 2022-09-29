import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ModalLog from './UI/ModalLog';
import ModalRegistration from './UI/ModalRegistration';
import StarUserRating from './UI/StarUserRating';

function App() {
  return (
    <>
      <ModalRegistration />
      <ModalLog />
      <StarUserRating />
    </>
  );
}

export default App;
