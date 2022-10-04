import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from '../../UI/Card';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/product').then((response) => {
      setProducts(response.data.map((prod) => {
        const images = prod.ProductPhotos.map((el) => el.photo);
        return ({
          photos: images,
          userName: prod.User.f_name,
          price: prod.price,
          userPhoto: prod.User.photo,
          description: prod.description,
          productName: prod.name,
          date: (new Date(prod.createdAt)).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
          userId: prod['User.id'],
        });
      }));
    });
  }, []);
  const categories = useSelector((state) => state.categories);
  const [findInput, setFindInput] = useState({ minRange: 0, maxRange: 0 });
  const changeHandler = (e) => {
    setFindInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(findInput);
  console.log(products);
  // console.log(categories);
  return (
    <div style={{ display: 'flex', marginLeft: '1rem' }}>
      <div>
        <p style={{ marginTop: '1rem' }}>Категория</p>
        {categories.map((el) => (
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={changeHandler} name={el.id} value={findInput[el.id]} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {el.name}
            </label>
          </div>
        ))}
        <p style={{ marginTop: '1rem' }}>Диапазон цены</p>

        <div className="range-slider">
          <input className="range-slider__range" type="range" name="minRange" value={findInput.minRange} onChange={changeHandler} min="0" max="10000" step="50" />
          <span className="range-slider__value">{findInput.minRange}</span>
        </div>

        <div className="range-slider">
          <input className="range-slider__range" type="range" name="maxRange" value={findInput.maxRange} onChange={changeHandler} min="0" max="10000" step="50" />
          <span className="range-slider__value">{findInput.maxRange}</span>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {products ? products.filter((el) => (findInput ? Object.keys(el).includes(findInput) : true)).map((el, i) => <Card product={el} key={i} />) : 'Товары не отобразились (('}
          {products.map((el) => (
            <Card product={el} key={el.id} />
          ))}
        </div>
        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}
