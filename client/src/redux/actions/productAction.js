/* eslint-disable guard-for-in */
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
  const formData = new FormData();
  for (const key in inputs) {
    if (typeof inputs[key] === 'object') {
      for (const file in inputs[key]) {
        formData.append('dropPhoto', inputs[key][file]);
      }
    } else {
      formData.append(key, inputs[key]);
    }
  }
  axios.post('/product', formData)
    .then((res) => {
      dispatch(addCategories(res.data));
      setInputs({
        dropPhoto: [], name: '', category: '', description: '', price: '', location: '', timing: '',
      });
    })
    .catch(console.log);
};
