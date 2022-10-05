import { COMMENTS } from '../types';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case COMMENTS:
      return [...state, payload];
    default:
      return state;
  }
}
