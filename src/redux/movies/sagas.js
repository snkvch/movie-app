import { takeEvery, call, put } from '@redux-saga/core/effects';

import fetchMovies from 'api/fetchMovies';
import { GET_MOVIE, MOVIES_FETCH_FAILED, setMovie } from 'redux/movies/actions';

function* requestMovie() {
  try {
    const response = yield call(fetchMovies);
    const { data } = response;
    yield put(setMovie(data));
  } catch (error) {
    yield put({ type: MOVIES_FETCH_FAILED });
  }
}

export function* watcherFetchMovies() {
  yield takeEvery(GET_MOVIE, requestMovie);
}
