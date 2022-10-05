import axios from 'axios';
import { SET_ORDER, NEW_ORDER } from '../types';

export const addOrder = (payload) => ({ type: NEW_ORDER, payload });
export const setOrder = (payload) => ({ type: SET_ORDER, payload });

export const addOrdering = (e, inputs, uid, pid, setModal, setSend) => (dispatch) => {
  e.preventDefault();
  console.log(inputs, pid, uid);
  axios.post(`/order/${pid}`, { pid, uid })
    .then((res) => {
      setModal(false);
      setSend(true);
      dispatch(addOrder(res.data));
    })
    .catch(console.log);
};
