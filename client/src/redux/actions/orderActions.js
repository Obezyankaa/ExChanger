import axios from 'axios';
import { SET_ORDER, NEW_ORDER, DECLINE_ORDER } from '../types';

export const addOrder = (payload) => ({ type: NEW_ORDER, payload });
export const setOrder = (payload) => ({ type: SET_ORDER, payload });
export const cancelOrder = (payload) => ({ type: DECLINE_ORDER, payload });

export const addOrdering = (e, message, user, product, timer, setModal, setSend) => (dispatch) => {
  e.preventDefault();
  const { timing } = timer;
  axios.post(`/order/${product}`, {
    message, user, product, timing,
  })
    .then((res) => {
      setModal(false);
      setSend(true);
      dispatch(addOrder(res.data));
    })
    .catch(console.log);
};

export const setOrdering = () => (dispatch) => {
  axios.get('/order')
    .then((res) => {
      console.log('экшн на ордер', res.data);
      dispatch(setOrder(res.data));
    })
    .catch(console.log);
};

export const cancelOrderAsync = (id, userRenterId, prodId) => (dispatch) => {
  axios.post('/application/decline', { user_renter: userRenterId, product_id: prodId })
    .then(() => dispatch(cancelOrder(id)))
    .catch(console.log);
};
