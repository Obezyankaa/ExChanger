import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import favoritesReducer from './reducers/favoritesReducer';
import categoriesReducer from './reducers/categoriesReducer';
import productReducer from './reducers/productReducer';
import usersReducer from './reducers/usersReducer';
import prodItemPageReducer from './reducers/prodItemPageReducer';
import userItemsReducer from './reducers/userItemsReducer';
import gradeProductReducer from './reducers/gradeProductReducer';
import changeFavoriteStateReducer from './reducers/changeFavoritStateReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    favorite: favoritesReducer,
    categories: categoriesReducer,
    product: productReducer,
    users: usersReducer,
    prodItemPage: prodItemPageReducer,
    userItems: userItemsReducer,
    gradeProduct: gradeProductReducer,
    changeFavoriteState: changeFavoriteStateReducer,
  },
});
