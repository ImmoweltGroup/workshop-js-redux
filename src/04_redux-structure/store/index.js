// @flow

//
// The entry point for the store, in this place we combine
// all redux modules together and create the store instance.
//
import {createStore, combineReducers} from 'redux';

//
// With Redux-Modules, sometimes reffered as `redux ducks`,
// you can split your business logic up into separate parts with boundaries.
//
import example from './modules/example/';

const reducer = combineReducers({
  example
});
const store = createStore(reducer);

export default store;
