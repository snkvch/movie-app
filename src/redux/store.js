import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : localStorage.setItem('reduxState', '');

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...[sagaMiddleware]))
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

sagaMiddleware.run(rootSaga);

export default store;
