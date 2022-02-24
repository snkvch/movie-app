export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const REMOVE_MOVIE_DETAILS = 'REMOVE_MOVIE_DETAILS';
export const DETAILS_FETCH_FAILED = 'DETAILS_FETCH_FAILED';

export const getMovieDetailsAction = (imdbID) => ({
  type: GET_MOVIE_DETAILS,
  payload: imdbID,
});

export const setMovieDetailsAction = (details) => ({
  type: SET_MOVIE_DETAILS,
  payload: details,
});

export const removeMovieDetailsAction = () => ({
  type: REMOVE_MOVIE_DETAILS,
});
