import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModalLog from './UI/ModalLog';
import ModalRegistration from './UI/ModalRegistration';
import Main from './components/Main';

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Navbar />
      <ModalRegistration />
      <ModalLog />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
