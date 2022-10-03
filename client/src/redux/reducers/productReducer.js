import { ADD_PRODUCT, SET_PRODUCT } from '../types';

export default function productReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return [...state, payload];
    case SET_PRODUCT:
      return payload;
    default:
      return state;
  }
}
