import axios from 'axios';
import { LOGOUT, SET_AUTH } from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });

export const checkAuth = () => (dispatch) => {
  axios.post('/auth/check')
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  console.log(inputs);
  e.preventDefault();
  axios.post('/auth/authorization', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  const data = new FormData();
  data.append('f_name', inputs.f_name);
  data.append('l_name', inputs.l_name);
  data.append('password', inputs.password);
  data.append('email', inputs.email);
  data.append('photo', inputs.photo);
  data.append('telegram', inputs.telegram);
  data.append('phone', inputs.phone);
  axios.post('/auth/registration', data)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
