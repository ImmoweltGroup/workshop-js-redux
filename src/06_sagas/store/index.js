// @flow

import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

//
// With Redux-Modules, sometimes reffered as `redux ducks`,
// you can split your business logic up into separate parts with boundaries.
//
import movies, {saga} from './modules/movies/';

const reducer = combineReducers({
  movies
});
const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, rootMiddleware);

sagaMiddleware.run(saga);

export default store;
