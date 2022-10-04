import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CardUser from './CardUser';

export default function UserAllProducts() {
  const user = useSelector((state) => state.user);
  const { id } = user;
  const items = useSelector((state) => state.userItems.filter((el) => el.user_id == id));
  console.log(items, id);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {items?.map((el) => (
        <CardUser el={el} key={el.id} />
      ))}
    </div>
  );
}
