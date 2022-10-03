import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../UI/Card';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/product').then((response) => {
      setProducts(response.data.map((prod) => {
        const images = prod.ProductPhotos.map((el) => el.photo);
        console.log(prod);
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
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
      }}
      >
        {products.map((el) => (
          <Card product={el} key={el.id} />
        ))}
      </div>
      <div style={{ height: '3rem' }} />
    </div>
  );
}
