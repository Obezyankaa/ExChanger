import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar';
import Page404 from './components/pages/Page404';
import Main from './components/pages/Main';
import PersonalArea from './components/pages/PersonalArea';
import AllProduct from './components/pages/AllProduct';
import './styles.css';

function App() {
  const [user, setUser] = useState(false);
  const [regActive, setRegActive] = useState(false);
  const [logActive, setLogActive] = useState(false);
  return (
    <>
      <Navbar setLogActive={setLogActive} setRegActive={setRegActive} />
      <Routes>
        <Route path="/" element={<Main regActive={regActive} logActive={logActive} />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="*" element={<Page404 to="/404" replace />} />
      </Routes>

    </>
  );
}

export default App;
