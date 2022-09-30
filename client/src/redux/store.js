import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import favoritesReducer from './reducers/favoritesReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    favorite: favoritesReducer,
  },
});
