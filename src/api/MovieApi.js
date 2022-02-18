import axios from 'axios';

const { REACT_APP_API_BASE } = process.env;

const movieApi = axios.create({
  baseURL: REACT_APP_API_BASE,
  timeout: 5000,
  responseType: 'json',
});

export default movieApi;
