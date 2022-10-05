import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../UI/Card';

export default function AllFavoriteProducts() {
  const [products, setProducts] = useState([]);
  const favorites = useSelector((state) => state.favorite);
  const [changeFavoritState, setChangeFavoritState] = useState(0);
  console.log('favorites', favorites);
  const [categoryInput, setCategoryInput] = useState({});
  const [findInput, setFindInput] = useState({ minRange: 0, maxRange: 5000 });
  useEffect(() => {
    setProducts(favorites.map((prod) => {
      console.log('1', prod);
      const images = prod.Product.ProductPhotos.map((el) => el.photo);
      return ({
        id: prod.Product.id,
        categoryId: prod.Product.Category.id,
        photos: images,
        userName: prod.Product.User.f_name,
        price: prod.Product.price,
        userPhoto: prod.Product.User.photo,
        description: prod.Product.description,
        productName: prod.Product.name,
        date: (new Date(prod.Product.createdAt)).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
        userId: prod.user_id,
      });
    }));
  }, [categoryInput, findInput, favorites, changeFavoritState]);
  console.log('products', products);
  const [showedProducts, setShowedProducts] = useState(products);
  const categories = useSelector((state) => state.categories);
  const changeHandler = (e) => {
    setFindInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeCategoryHandler = (e) => {
    setCategoryInput((prev) => ({ ...prev, [e.target.name]: e.target.value !== 'true' }));
  };
  useEffect(() => {
    setShowedProducts(() => products.filter((el) => Number(el.price) <= findInput.maxRange && Number(el.price) >= findInput.minRange)
      .filter(
        (el) => {
          const keys = Object.keys(categoryInput).map((elem) => Number(elem));
          return keys.length ? keys.includes(el.categoryId) && categoryInput[el.categoryId] === true : true;
        },
      ));
  }, [categoryInput, findInput]);

  return (
    <div style={{ display: 'flex', marginLeft: '1rem' }}>
      <div>
        <p style={{ marginTop: '1rem' }}>Категория</p>
        {categories.map((el) => (
          <div key={el.id} className="form-check">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={changeCategoryHandler} checked={categoryInput[el.id]} value={categoryInput[el.id]} name={el.id} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {el.name}
            </label>
          </div>
        ))}
        <p style={{ marginTop: '1rem' }}>Диапазон цены</p>

        <div className="range-slider">
          <input className="range-slider__range" type="range" name="minRange" value={findInput.minRange} onChange={changeHandler} min="0" max="5000" step="50" />
          <span className="range-slider__value">{findInput.minRange}</span>
        </div>

        <div className="range-slider">
          <input className="range-slider__range" type="range" name="maxRange" value={findInput.maxRange} onChange={changeHandler} min="0" max="5000" step="50" />
          <span className="range-slider__value">{findInput.maxRange}</span>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {showedProducts.map((el) => <Card product={el} key={el.id} setChangeFavoritState={setChangeFavoritState} />)}
        </div>
        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}