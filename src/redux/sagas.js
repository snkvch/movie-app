import { takeEvery, call, put } from '@redux-saga/core/effects';

import fetchMovies from 'api/fetchMovies';
import { GET_MOVIE, MOVIES_FETCH_FAIED, setMovie } from 'redux/actions';

function* requestMovie() {
  try {
    const response = yield call(fetchMovies);
    const { data } = response;
    yield put(setMovie(data));
  } catch (error) {
    yield put({ type: MOVIES_FETCH_FAIED });
  }
}

export function* watcherFetchMovies() {
  yield takeEvery(GET_MOVIE, requestMovie);
}
