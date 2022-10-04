import { SET_GRADE_PRODUCT, ADD_GRADE_PRODUCT } from '../types';

export default function gradeProductReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GRADE_PRODUCT:
      return payload;
    case SET_GRADE_PRODUCT:
      return payload;
    default:
      return state;
  }
}
