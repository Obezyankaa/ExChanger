import axios from 'axios';

import {
  COMMENTS,
} from '../types';

export const setComments = (payload) => ({ type: COMMENTS, payload });

export const addComments = (e, inputs, setSend) => (dispatch) => {
  e.preventDefault();
  console.log(inputs);
  axios.post('/comments')
    .then((res) => {
      dispatch(setComments(res.data));
    })
    .catch(console.log);
};
