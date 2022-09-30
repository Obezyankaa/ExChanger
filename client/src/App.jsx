import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/NavBar';
import Page404 from './components/pages/Page404';
import PersonalArea from './components/pages/PersonalArea';
import AllProduct from './components/pages/AllProduct';
import Map from './components/Map/Map';
import Settings from './components/pages/Settings';
import Main from './components/pages/Main';
import LK from './components/pages/LK';

function App() {
  const [regActive, setRegActive] = useState(false);
  const [logActive, setLogActive] = useState(false);
  return (
    <>
      <Navbar setLogActive={setLogActive} setRegActive={setRegActive} />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/lk" element={<LK />} />
        <Route path="/" element={<Main regActive={regActive} logActive={logActive} />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="*" element={<Page404 to="/404" replace />} />
      </Routes>
    </>
  );
}

export default App;
