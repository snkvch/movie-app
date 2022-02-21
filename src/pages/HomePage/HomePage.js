import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMovie } from 'redux/actions';

import { MovieList } from 'components/MovieList';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return <MovieList />;
}

export default HomePage;
