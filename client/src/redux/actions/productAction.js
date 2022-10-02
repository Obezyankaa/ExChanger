import axios from 'axios';
import { ADD_PRODUCT, SET_PRODUCT } from '../types';

export const addCategories = (payload) => ({ type: ADD_PRODUCT, payload });
export const setCategories = (payload) => ({ type: SET_PRODUCT, payload });

export const fetchCategories = () => (dispatch) => {
  axios('/product')
    .then((res) => dispatch(setCategories(res.data)))
    .catch(console.log);
};

export const addProduct = (e, inputs, setInputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/product', { inputs })
    .then((res) => {
      dispatch(addCategories(res.data));
      setInputs('');
    })
    .catch(console.log);
};
