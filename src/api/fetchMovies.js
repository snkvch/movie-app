import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const { REACT_APP_API_BASE } = process.env;

function fetchMovies(textInput) {
  const defaultMovie = 'Friends';
  const movie = textInput || defaultMovie;

  return axios.request({
    method: 'get',
    url: `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&s=${movie}&type=movie`,
  });
}

export function fetchMovieDetails(imdbID) {
  return axios.request({
    method: 'get',
    url: `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&i=${imdbID}&Plot=full`,
  });
}

export default fetchMovies;
