import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './actions';

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_TO_WISHLIST: {
      return { ...state, wishlist: [...state.wishlist, payload] };
    }
    case REMOVE_FROM_WISHLIST: {
      const results = state.wishlist.filter(
        (movie) => movie.imdbID !== payload.imdbID
      );
      return { ...state, wishlist: results };
    }
    default:
      return state;
  }
};

export default wishlistReducer;
