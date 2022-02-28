import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import {
  ListContainer,
  Title,
  List,
} from 'components/MovieList/MovieList.styles';

import { wishlistSelector } from 'redux/wishlist/selectors';
import { MovieItem } from 'components/MovieItem';

const EMPTY_WISHLIST = 'Sorry, your wishlist is empty :(';
const WISHLIST = 'WISHLIST';

function Wishlist() {
  const wishlist = useSelector(wishlistSelector);
  const renderWishlistMovies = wishlist.length ? (
    wishlist.map((movie) => (
      <Grid item key={movie.imdbID} xs={12} sm={6} md={3}>
        <MovieItem data={movie} />
      </Grid>
    ))
  ) : (
    <Title>{EMPTY_WISHLIST}</Title>
  );

  return (
    <div>
      <ListContainer>
        <Title>{WISHLIST}</Title>
        <List container>{renderWishlistMovies}</List>
      </ListContainer>
    </div>
  );
}

export default Wishlist;
