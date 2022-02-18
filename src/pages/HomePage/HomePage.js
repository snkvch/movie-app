import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MovieList } from 'components/MovieList';
import fetchAsyncMovies from 'api/fetchMovies';
import fetchAsyncShows from 'api/fetchShows';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return <MovieList />;
}

export default HomePage;
