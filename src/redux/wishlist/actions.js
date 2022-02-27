export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (imdbID) => ({
  type: ADD_TO_WISHLIST,
  payload: imdbID,
});

export const removeFromWishlist = (imdbID) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: imdbID,
});
