import axios from 'axios';
import {
  SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT,
} from '../types';

export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
export const updateProduct = (payload) => ({ type: UPDATE_PRODUCT, payload });

export const submitProduct = (product) => (dispatch) => {
  axios.post('/product', { product }, { withCredentials: true })
    .then((res) => {
      dispatch(addProduct(res.data));
    })
    .catch(console.log);
};

export const fetchProducts = () => (dispatch) => {
  axios('/product')
    .then((response) => {
      dispatch(setProducts(response.data));
    })
    .catch(console.log);
};

export const deleteProductAsync = (id) => (dispatch) => {
  axios.delete(`/product/${id}`)
    .then(() => dispatch(deleteProduct(id)))
    .catch(console.log);
};

export const updateProductAsync = (prod) => (dispatch) => {
  axios.put('/product')
    .then(() => dispatch(updateProduct(prod)))
    .catch(console.log);
};
