import axios from 'axios';
import { SET_GRADE_PRODUCT, ADD_GRADE_PRODUCT } from '../types';

export const addGradeProduct = (payload) => ({ type: ADD_GRADE_PRODUCT, payload });
export const setGradeProduct = (payload) => ({ type: SET_GRADE_PRODUCT, payload });

export const countGradeProd = (id) => (dispatch) => {
  console.log('ppppp');
  axios.get(`/grade/${id}`)
    .then((res) => dispatch(setGradeProduct(res.data)))
    .catch(console.log);
};

export const submitGradeProduct = (input) => (dispatch) => {
  console.log(input);
  axios.post(`/grade/${input.id}`, input)
    .then(dispatch(countGradeProd(input.id)))
    .catch(console.log);
};
