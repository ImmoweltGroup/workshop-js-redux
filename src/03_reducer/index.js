// @flow

import {createAction} from 'redux-actions';
import {createStore} from 'redux';
import {$set} from 'plow-js';

//
// The reducer is the last Primitive we need to understand to benefit of redux.
// It is a function that gets executed on each dispatched option.
//
// This is the place where you add the update logic of your state,
// since it gets called on each action we need to decide what to update / execute
// based on the type which is included in the action what to update.
//
function reducer(currentState, action) {
  console.log('reducer', currentState, action);

  switch (action.type) {
    case 'myFooAction': {
      const newState = $set('foo', action.payload.foo, currentState);

      return newState;
    }
    case 'myBarAction': {
      const newState = $set('bar', action.payload.bar, currentState);

      return newState;
    }
    default:
      return currentState;
  }
}

//
// Lets create the store with the reducer and listen for updates.
//
const initialState = {
  foo: 1,
  bar: 4
};
const store = createStore(reducer, initialState);

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('something was dispatched', store.getState());
});

//
// Lets define and dispatch some dummy action( creators) to see how all of this works.
//
const setFoo = createAction('myFooAction', foo => ({
  foo
}));
const setBar = createAction('myBarAction', bar => ({
  bar
}));

store.dispatch(setFoo(5));
store.dispatch(setBar(239));
store.dispatch(setFoo(10));
