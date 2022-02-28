import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import 'react-toastify/dist/ReactToastify.css';

import {
  getMovieDetailsAction,
  removeMovieDetailsAction,
} from 'redux/details/actions';
import { getMovieDetails } from 'redux/details/selectors';
import { addToWishlist, removeFromWishlist } from 'redux/wishlist/actions';
import { wishlistSelector } from 'redux/wishlist/selectors';
import CustomButton from 'components/CustomButton/CustomButton';

import {
  MovieTitle,
  MovieRating,
  MovieSection,
  SectionLeft,
  MoviePlot,
  MovieInfo,
  SectionRight,
  MoviePoster,
} from './MovieDetails.styles';

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieSelector = useSelector(getMovieDetails);
  const getMovieCheck = useSelector(wishlistSelector);

  useEffect(() => {
    dispatch(getMovieDetailsAction(imdbID));
    return () => {
      dispatch(removeMovieDetailsAction());
    };
  }, [dispatch, imdbID]);

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = movieSelector;

  const saveMovie = () => {
    dispatch(addToWishlist(movieSelector));
    toast.success('Movie was added to your wishlist');
  };
  const removeMovie = () => {
    dispatch(removeFromWishlist(movieSelector));
    toast.warn('Movie was removed from your wishlist');
  };

  return (
    <MovieSection>
      {Object.keys(movieSelector).length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <SectionLeft>
            <MovieTitle>{Title}</MovieTitle>
            <Rating value={imdbRating * 0.5} readOnly />
            <MovieRating>
              <span> IMDB Rating : {imdbRating} 👍 </span>
              <span> IMDB Votes : {imdbVotes} 👥 </span>
              <span> Runtime : {Runtime} 🕐 </span>
              <span> Year : {Year} 🗓 </span>
            </MovieRating>
            <MoviePlot>{Plot}</MoviePlot>
            <MovieInfo>
              <div>
                <span>Director:</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Cast:</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Genres:</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Languages:</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards:</span>
                <span>{Awards}</span>
              </div>
            </MovieInfo>
          </SectionLeft>
          <SectionRight>
            <MoviePoster>
              <img src={Poster} alt={Title} />
            </MoviePoster>
            {getMovieCheck.findIndex((movie) => movie.imdbID === imdbID) ===
            -1 ? (
              <CustomButton
                text="Add to wishlist"
                onClick={saveMovie}
                endIcon={<AddIcon />}
              />
            ) : (
              <CustomButton
                text="Remove from wishlist"
                onClick={removeMovie}
                endIcon={<RemoveIcon />}
              />
            )}
          </SectionRight>
          <ToastContainer autoClose={1500} />
        </div>
      )}
    </MovieSection>
  );
}

export default MovieDetails;
