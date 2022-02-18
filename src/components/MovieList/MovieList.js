import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import { getAllMovies, getAllShows } from 'redux/movies/moviesSlice';
import { MovieItem } from 'components/MovieItem';

import { ListContainer, List, Title } from './MovieList.styles';

const MOVIES = 'MOVIES';
const SHOWS = 'SHOWS';

function MovieList() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={3}>
          <MovieItem data={movie} />
        </Grid>
      ))
    ) : (
      <h1>{movies.Error}</h1>
    );

  const renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show) => (
        <Grid item key={show.id} xs={12} sm={6} md={3}>
          <MovieItem data={show} />
        </Grid>
      ))
    ) : (
      <h1>{shows.Error}</h1>
    );

  return (
    <div>
      <ListContainer>
        <Title>{MOVIES}</Title>
        <List container>{renderMovies}</List>
      </ListContainer>
      <ListContainer>
        <Title>{SHOWS}</Title>
        <List container>{renderShows}</List>
      </ListContainer>
    </div>
  );
}

export default MovieList;
