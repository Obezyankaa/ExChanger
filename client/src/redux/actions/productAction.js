/* eslint-disable guard-for-in */
import axios from 'axios';
import {
  SET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT,
} from '../types';

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
export const updateProduct = (payload) => ({ type: UPDATE_PRODUCT, payload });

export const addProduct = (e, inputs, setInputs, newStat) => () => {
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
    .then(() => {
      setInputs({
        dropPhoto: [], name: '', category: '', description: '', price: '', location: '', timing: '',
      });
      newStat(false);
    });
};

export const deleteProductAsync = (id) => (dispatch) => {
  axios.delete(`/product/${id}`)
    .then(() => dispatch(deleteProduct(id)))
    .catch(console.log);
};

export const updateProductAsync = (product) => (dispatch) => {
  axios.put('/product', { changedProduct: product }, { withCredentials: true })
    .then(() => dispatch(updateProduct(product)))
    .catch(console.log);
};
