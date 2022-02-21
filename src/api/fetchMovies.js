import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const { REACT_APP_API_BASE } = process.env;

function fetchMovies() {
  const movieText = 'Friends';

  return axios.request({
    method: 'get',
    url: `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&s=${movieText}&type=movie`,
  });
}

export default fetchMovies;
