import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from './components/Map';

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={(
          <p style={{
            height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            Hello world
          </p>
)}
      />
      <Route index path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
