import { combineReducers } from 'redux';

import moviesReducer from './movies/reducer';

export default combineReducers({
  movie: moviesReducer,
});
