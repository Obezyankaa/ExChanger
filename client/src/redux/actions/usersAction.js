import axios from 'axios';
import { SET_USER } from '../types';

export const setUser = (payload) => ({ type: SET_USER, payload });

export const fetchUsers = (id) => (dispatch) => {
  axios(`/user/${id}`)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};
