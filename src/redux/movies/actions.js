export const GET_MOVIE = 'GET_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED';

export const getMovie = (textInput) => ({
  type: GET_MOVIE,
  payload: textInput,
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
