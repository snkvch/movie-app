import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { MovieItem } from 'components/MovieItem';
import { getAllMovies } from 'redux/selectors';
import { ListContainer, List, Title } from './MovieList.styles';

const MOVIES = 'MOVIES';

function MovieList() {
  const moviesSelector = useSelector(getAllMovies);

  const renderMovies =
    moviesSelector.Response === 'True' ? (
      moviesSelector.Search.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={3}>
          <MovieItem data={movie} />
        </Grid>
      ))
    ) : (
      <h1>{moviesSelector.Error}</h1>
    );

  return (
    <div>
      <ListContainer>
        <Title>{MOVIES}</Title>
        <List container>{renderMovies}</List>
      </ListContainer>
    </div>
  );
}

export default MovieList;
