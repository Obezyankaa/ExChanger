import axios from 'axios';
import {
  ADD_FAVORITES, DELETE_FAVORITE, SET_FALSE, SET_FAVORITES, SET_STATE, SET_TRUE,
} from '../types';

export const addFavorite = (payload) => ({ type: ADD_FAVORITES, payload });
export const setFavorites = (payload) => ({ type: SET_FAVORITES, payload });
export const deleteFavorite = (payload) => ({ type: DELETE_FAVORITE, payload });

export const setFavorite = (id) => (dispatch) => {
  console.log(111111111, id);
  axios.put(`/favorite/${id}`)
    .then((res) => dispatch(addFavorite(res.data)))
    .then(() => dispatch({ type: SET_TRUE }))
    .catch(console.log);
};

export const deleteFavoriteAsync = (id) => (dispatch) => {
  axios.delete(`/favorite/${id}`)
    .then(() => dispatch(deleteFavorite(id)))
    .then(() => dispatch({ type: SET_FALSE }))
    .catch(console.log);
};

export const fetchFavorites = () => (dispatch) => {
  axios('/favorite')
    .then((response) => {
      dispatch(setFavorites(response.data));
    })
    .catch(console.log);
};

export const setFavoriteState = (payload) => (dispatch) => {
  dispatch({ type: SET_STATE, payload });
};
