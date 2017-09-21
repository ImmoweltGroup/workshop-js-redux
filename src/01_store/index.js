// @flow

//
// The store is the first "Primitive" you need to understand when it comes to redux.
// It is the central place where the whole business logic and data flows through.
//
// Kind of like the engine in a car!
//
import {createStore} from 'redux';

//
// Ignore the reducer down there, we will explain it further down the road :-)
//
const reducer = (state, action) => {
  return state;
};
const initialState = {};
const store = createStore(reducer, initialState);

//
// You can think of the store as an EventBus that also holds the data of your application.
//
// The most important methods of the store are
//
// `subscribe` - Which you can pass an function as the first and only argument. It will be called everytime something "happens" in your application.
// `dispatch` - Which you can pass an action as the first and only argument.
// `getState` - Which you can call and return you the current data of your application.
//
console.log(store);
console.log(store.getState());

store.subscribe(() => {
  console.log('something was dispatched', store.getState());
});

store.dispatch({type: 'foo'});
store.dispatch({type: 'foo'});
