import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar';
import Page404 from './components/pages/Page404';
import Main from './components/pages/Main';
import PersonalArea from './components/pages/PersonalArea';
import AllProduct from './components/pages/AllProduct';

function App() {
  const [user, setUser] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="*" element={<Page404 to="/404" replace />} />
      </Routes>

    </>
  );
}

export default App;
