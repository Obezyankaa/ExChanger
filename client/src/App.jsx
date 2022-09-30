import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './UI/NavBar';
import Page404 from './components/pages/Page404';
import PersonalArea from './components/pages/PersonalArea';
import AllProduct from './components/pages/AllProduct';
import Map from './components/Map/Map';
import Settings from './components/pages/Settings';
import Main from './components/pages/Main';
import LK from './components/pages/LK';
import { fetchFavorites } from './redux/actions/favoritesAction';
import { checkAuth } from './redux/actions/userAction';
import './styles.css';
import OneCartForm from './UI/MainCartForm/OneCartForm';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchFavorites());
  }, []);
  const [regActive, setRegActive] = useState(false);
  const [logActive, setLogActive] = useState(false);
  return (
    <>
      <Navbar setLogActive={setLogActive} setRegActive={setRegActive} />
      <Routes>
        <Route path="/" element={<Main regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/lk" element={<LK />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="*" element={<Page404 to="/404" replace />} />
        <Route path="/product" element={<OneCartForm />} />
      </Routes>
    </>
  );
}

export default App;
