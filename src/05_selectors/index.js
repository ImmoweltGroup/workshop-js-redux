// @flow

import {createSelector} from 'reselect';
import store from './store/';
import {actions} from './store/modules/example/';

//
// Selectors are the API to get/query something from the store.
// A selector is just a simple function that can be invoked with
// the state as the first and optional props as the second argument.
//
const getFoo = (state, props) => state.example.foo;
const getBar = (state, props) => state.example.bar;

//
// Using reselect we can also add another caching level in between redux and react.
// The `createSelector` function gets called with a list of input selectors,
// and a composition function that returns the result of the selector to create.
//
// The finalized selector has the same API as the uncached selectors,
// first argument state, second argument optional props.
//
// The finalized selector gets invoked each time one of the
// input selectors return value has changed.
//
// These memoized selectors are especially effective if you need to
// transform the data in your state.
//
const getFooBar = createSelector([getFoo, getBar], (foo, bar) => {
  console.log('re-computation of getFooBar()!');

  return foo + bar;
});

//
// Lets listen for updates and query the state.
//
store.subscribe(() => {
  console.log('something was dispatched');
  const state = store.getState();
  const foo = getFoo(state);
  const bar = getBar(state);
  const fooBar = getFooBar(state);

  console.log('results', foo, bar, fooBar);
  console.log('\n');
});

store.dispatch(actions.setFoo(5));
store.dispatch(actions.setBar(239));
store.dispatch(actions.setFoo(10));
