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
import { allCategories } from './redux/actions/categoriesAction';
import ItemPage from './components/pages/ItemPage';
import OneCartForm from './UI/MainCartForm/OneCartForm';
import Profile from './components/pages/Profile';
import Loading from './UI/Loading';
import Card from './UI/Card';
import AllProducts from './components/pages/AllProducts';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchFavorites());
    dispatch(allCategories());
  }, []);
  const [regActive, setRegActive] = useState(false);
  const [logActive, setLogActive] = useState(false);
  const [addProdActive, setAddProdActive] = useState(false);

  return (
    <>
      <Navbar
        setLogActive={setLogActive}
        setRegActive={setRegActive}
        setAddProdActive={setAddProdActive}
      />
      <Routes>
        <Route path="/" element={<Main regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/lk" element={<LK />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Page404 to="/404" replace />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/product" element={<OneCartForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/load" element={<Loading />} />
        <Route path="/card" element={<Card />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
