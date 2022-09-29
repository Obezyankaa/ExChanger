import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ModalLog from './UI/ModalLog';
import ModalRegistration from './UI/ModalRegistration';

function App() {
  return (
    <>
      <ModalRegistration />
      <ModalLog />
    </>
  );
}

export default App;
