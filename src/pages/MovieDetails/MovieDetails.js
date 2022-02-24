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

  return (
    <MovieSection>
      <SectionLeft>
        <MovieTitle>{movieSelector.Title}</MovieTitle>
        <Rating value={movieSelector.imdbRating * 0.5} readOnly />
        <MovieRating>
          <span> IMDB Rating : {movieSelector.imdbRating} 👍 </span>
          <span> IMDB Votes : {movieSelector.imdbVotes} 👥 </span>
          <span> Runtime : {movieSelector.Runtime} 🕐 </span>
          <span> Year : {movieSelector.Year} 🗓 </span>
        </MovieRating>
        <MoviePlot>{movieSelector.Plot}</MoviePlot>
        <MovieInfo>
          <div>
            <span>Director:</span>
            <span>{movieSelector.Director}</span>
          </div>
          <div>
            <span>Cast:</span>
            <span>{movieSelector.Actors}</span>
          </div>
          <div>
            <span>Genres:</span>
            <span>{movieSelector.Genre}</span>
          </div>
          <div>
            <span>Languages:</span>
            <span>{movieSelector.Language}</span>
          </div>
          <div>
            <span>Awards:</span>
            <span>{movieSelector.Awards}</span>
          </div>
        </MovieInfo>
      </SectionLeft>
      <SectionRight>
        <img src={movieSelector.Poster} alt={movieSelector.Title} />
      </SectionRight>
    </MovieSection>
  );
}

export default MovieDetails;
