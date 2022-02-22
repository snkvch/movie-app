import React from 'react';

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
      <Media image={data.Poster} alt={data.Title} />
      <Content>
        <MovieTitle>{data.Title}</MovieTitle>
        <MovieYear>{data.Year}</MovieYear>
      </Content>
    </StyledCard>
  );
}

export default MovieItem;
