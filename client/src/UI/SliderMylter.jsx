import React from 'react';
import ReactLoading from 'react-loading';
import './SliderMulter.css';

export default function SliderMylter({ type }) {
  return (
    <div className="slider">
      <ReactLoading
        style={{ backgroundColor: 'white' }}
        type={type}
      />
    </div>
  );
}
