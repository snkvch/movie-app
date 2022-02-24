import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  StyledCard,
  Media,
  Content,
  MovieTitle,
  MovieYear,
} from './MovieItem.styles';

function MovieItem(props) {
  const { data } = props;

  return (
    <StyledCard>
      <NavLink to={`/movie/${data.imdbID}`}>
        <Media image={data.Poster} alt={data.Title} />
        <Content>
          <MovieTitle>{data.Title}</MovieTitle>
          <MovieYear>{data.Year}</MovieYear>
        </Content>
      </NavLink>
    </StyledCard>
  );
}

export default MovieItem;
