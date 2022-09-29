import axios from 'axios';
import { LOGOUT, SET_AUTH } from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });

export const checkAuth = () => (dispatch) => {
  axios.post(`${process.env.REACT_APP_BASEURL}/api/user/check`)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  console.log(inputs);
  e.preventDefault();
  axios.post(`${process.env.REACT_APP_BASEURL}/user/login`, inputs)
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
  axios.post(`${process.env.REACT_APP_BASEURL}/auth/registration`, data)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios(`${process.env.REACT_APP_BASEURL}/user/logout`)
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
