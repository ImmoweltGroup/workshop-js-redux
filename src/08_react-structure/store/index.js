// @flow

import {createStore, combineReducers} from 'redux';
import system from './modules/system/';

//
// Lets create the store with the reducer and listen for updates.
//
const reducer = combineReducers({
  system
});
const store = createStore(reducer);

export default store;
