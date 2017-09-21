// @flow

import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import movies, {saga} from './modules/movies/';

const reducer = combineReducers({
  movies
});
const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, rootMiddleware);

sagaMiddleware.run(saga);

export default store;
