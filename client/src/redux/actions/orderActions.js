import axios from 'axios';
import { SET_ORDER, NEW_ORDER } from '../types';

export const addOrder = (payload) => ({ type: NEW_ORDER, payload });
export const setOrder = (payload) => ({ type: SET_ORDER, payload });

export const addOrdering = (e, message, uid, pid, timer, setModal, setSend) => (dispatch) => {
  e.preventDefault();
  const { timing } = timer;
  axios.post(`/order/${pid}`, {
    message, uid, pid, timing,
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
      dispatch(console.log(res.data));
    })
    .catch(console.log);
};
