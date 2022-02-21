export const GET_MOVIE = 'GET_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const MOVIES_FETCH_FAIED = 'MOVIES_FETCH_FAIED';

export const getMovie = () => ({
  type: GET_MOVIE,
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  movie,
});
