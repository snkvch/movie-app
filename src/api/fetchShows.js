import { createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from 'api/MovieApi';

const { REACT_APP_API_KEY } = process.env;

const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async () => {
  const seriesText = 'Witcher';
  const response = await movieApi.get(
    `/?apiKey=${REACT_APP_API_KEY}&s=${seriesText}&type=series`
  );
  return response.data;
});

export default fetchAsyncShows;
