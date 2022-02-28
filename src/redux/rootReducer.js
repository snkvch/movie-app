import { combineReducers } from 'redux';

import moviesReducer from './movies/reducer';
import movieDetailsReducer from './details/reducers';
import wishlistReducer from './wishlist/reducer';

export default combineReducers({
  movie: moviesReducer,
  details: movieDetailsReducer,
  wishlist: wishlistReducer,
});
