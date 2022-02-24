import { combineReducers } from 'redux';

import moviesReducer from './movies/reducer';
import movieDetailsReducer from './details/reducers';

export default combineReducers({
  movie: moviesReducer,
  details: movieDetailsReducer,
});
