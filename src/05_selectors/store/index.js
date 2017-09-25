// @flow

import {createStore, combineReducers} from 'redux';
import movies from './modules/movies/';

const reducer = combineReducers({
  movies
});
const store = createStore(reducer);

export default store;
