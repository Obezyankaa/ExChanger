import React from 'react';
import { useSelector } from 'react-redux';
import CardUser from './CardUser';

export default function OtherAllProducts({ id }) {
  console.log(id);
  const items = useSelector((state) => state.userItems.filter((el) => el.user_id == id));
  console.log(items, id);
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
      }}
      >
        {items?.map((el) => (
          <CardUser el={el} key={el.id} />
        ))}
      </div>
    </div>

  );
}
