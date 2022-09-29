import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModalLog from './UI/ModalLog';
import ModalRegistration from './UI/ModalRegistration';
import StarUserRating from './UI/StarUserRating';

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Navbar />
      <ModalRegistration />
      <ModalLog />
      <StarUserRating />
    </>
  );
}

export default App;
