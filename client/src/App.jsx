import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './UI/NavBar';
import Page404 from './components/pages/Page404';
import Settings from './components/pages/Settings';
import Main from './components/pages/Main';
import { fetchFavorites } from './redux/actions/favoritesAction';
import { checkAuth } from './redux/actions/userAction';
import './styles.css';
import { allCategories } from './redux/actions/categoriesAction';
import ItemPage from './components/pages/ItemPage';
import Profile from './components/pages/Profile';
import UserProfile from './components/pages/UserProfile';
import AllProducts from './components/pages/AllProducts';
import { fetchUserItems } from './redux/actions/userItemsAction';
import AllFavoriteProducts from './components/pages/AllFavoritesProducts';
import SliderMylter from './UI/SliderMylter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchFavorites());
    dispatch(allCategories());
    dispatch(fetchUserItems());
  }, []);
  const [night, setNight] = useState(true);
  const [regActive, setRegActive] = useState(false);
  const [logActive, setLogActive] = useState(false);
  const [addProdActive, setAddProdActive] = useState(false);

  return (
    <div style={night === true ? ({ backgroundColor: 'white', color: 'white', height: '100vh' }) : ({ backgroundColor: '#202124', color: 'white', height: '100vh' })}>
      <Navbar
        setLogActive={setLogActive}
        setRegActive={setRegActive}
        setAddProdActive={setAddProdActive}
        setNight={setNight}
        night={night}
      />
      <Routes>
        <Route path="/" element={<Main regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="/settings" element={<Settings setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="*" element={<Page404 regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} to="/404" replace />} />
        <Route path="/item/:id" element={<ItemPage regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        {/* <Route path="/profile" element={<Profile setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} /> */}
        <Route path="/allproducts" element={<AllProducts regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="/profile" element={<Profile setNight={setNight} night={night} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allFavoriteProducts" element={<AllFavoriteProducts />} />
        <Route path="/user/:id" element={<UserProfile regActive={regActive} setRegActive={setRegActive} setLogActive={setLogActive} logActive={logActive} setAddProdActive={setAddProdActive} addProdActive={addProdActive} />} />
        <Route path="/slider" element={<SliderMylter />} />
      </Routes>
    </div>
  );
}

export default App;
