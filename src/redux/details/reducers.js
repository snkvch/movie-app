import { REMOVE_MOVIE_DETAILS, SET_MOVIE_DETAILS } from './actions';

const initialState = {
  details: [],
};

const movieDetailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE_DETAILS: {
      const details = action.payload;
      return { ...state, details };
    }
    case REMOVE_MOVIE_DETAILS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default movieDetailsReducer;
