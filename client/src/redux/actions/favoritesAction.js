import axios from 'axios';
import { ADD_FAVORITES, DELETE_FAVORITE, SET_FAVORITES } from '../types';

export const addFavorite = (payload) => ({ type: ADD_FAVORITES, payload });
export const setFavorites = (payload) => ({ type: SET_FAVORITES, payload });
export const deleteFavorite = (payload) => ({ type: DELETE_FAVORITE, payload });

export const submitFavorite = (favorite) => (dispatch) => {
  axios.post('/favorite', { favorite }, { withCredentials: true })
    .then((res) => {
    //   console.log(res);
      dispatch(addFavorite(res.data));
    })
    .catch(console.log);
};

export const fetchFavorites = () => (dispatch) => {
  axios('/favorite')
    .then((response) => {
      dispatch(setFavorites(response.data));
    })
    .catch(console.log);
};

export const deleteFavoriteAsync = (id) => (dispatch) => {
  axios.delete(`/favorite/${id}`)
    .then(() => dispatch(deleteFavorite(id)))
    .catch(console.log);
};
