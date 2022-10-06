import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdering } from '../../redux/actions/orderActions';
import OrderItem from '../../UI/OrderItem';

export default function RentPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(setOrdering());
  }, []);
  return (
    <>
      <div>{user.f_name}</div>
      <div>
        {order?.map((el) => (
          <OrderItem order={el} key={el.id} />
        ))}

      </div>
    </>
  );
}
