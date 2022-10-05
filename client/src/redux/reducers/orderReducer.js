import { SET_ORDER, NEW_ORDER } from '../types';

export default function userReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case NEW_ORDER:
      return [...state, payload];
    case SET_ORDER:
      return payload;
    default:
      return state;
  }
}
