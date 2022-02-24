import { SET_MOVIE } from './actions';

const initialState = {
  movie: [],
};

const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE: {
      const movie = action.payload;
      return { ...state, movie };
    }
    default:
      return state;
  }
};

export default moviesReducer;
