import { createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from 'api/MovieApi';

const { REACT_APP_API_KEY } = process.env;

const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Friends';
    const response = await movieApi.get(
      `/?apiKey=${REACT_APP_API_KEY}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export default fetchAsyncMovies;
