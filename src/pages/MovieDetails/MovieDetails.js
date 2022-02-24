import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';

import {
  getMovieDetailsAction,
  removeMovieDetailsAction,
} from 'redux/details/actions';
import { getMovieDetails } from 'redux/details/selectors';

import {
  MovieTitle,
  MovieRating,
  MovieSection,
  SectionLeft,
  MoviePlot,
  MovieInfo,
  SectionRight,
} from './MovieDetails.styles';

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieSelector = useSelector(getMovieDetails);

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

  return (
    <MovieSection>
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
        <img src={Poster} alt={Title} />
      </SectionRight>
    </MovieSection>
  );
}

export default MovieDetails;
