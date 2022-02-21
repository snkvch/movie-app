import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './root-reducer';
import { watcherFetchMovies } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(...[sagaMiddleware]));
sagaMiddleware.run(watcherFetchMovies);

export default store;
