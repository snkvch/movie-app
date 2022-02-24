import { takeEvery, call, put } from '@redux-saga/core/effects';

import { fetchMovieDetails } from 'api/fetchMovies';

import {
  DETAILS_FETCH_FAILED,
  GET_MOVIE_DETAILS,
  setMovieDetailsAction,
} from './actions';

export function* handleGetMovie(action = {}) {
  try {
    const response = yield call(fetchMovieDetails, action.payload);
    const { data } = response;
    yield put(setMovieDetailsAction(data));
  } catch (error) {
    yield put({ type: DETAILS_FETCH_FAILED });
  }
}

export function* watcherFetchMovieDetails() {
  yield takeEvery(GET_MOVIE_DETAILS, handleGetMovie);
}
