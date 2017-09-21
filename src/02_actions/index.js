// @flow

//
// An action, or `action object` is an object which represent the task and
// it's arguments you want your application to execute.
//
const myAction = {
  // The action must include a property `type` - It's a string that your application should use
  // to identify the logic it needs to execute.
  type: 'MY_ACTION_TYPE',

  // The payload is an object of arguments that you can specify.
  // This object can be structured the way you and the logic the action executes requires.
  payload: {
    foo: 'bar'
  }
};

console.log(myAction);

//
// Since creating the object over and over again throughout your application creates code duplication,
// redux introduces the `actionCreator` pattern.
//
// The `actionCreator` is a function that you can pass your optional arguments,
// it will return the finalized action object.
//
// This is your API to interact with redux,
// it reduces code duplication and defines the action object shape in one single place.
//
function myActionCreator1(arg1) {
  return {
    type: 'MY_ACTION_TYPE',
    payload: {
      foo: arg1
    }
  };
}

const myAction1 = myActionCreator1('bar1');

console.log(myAction1);

//
// But we can do even better, code reduction is everything!
// The package `redux-actions` comes with a helper function which creates the
// standardized structure for you and returns your actionCreator function.
//
// The first argument is the actionType string and the second an
// optional function that returns the action payload structure.
//
import {createAction} from 'redux-actions';

const myActionCreator2 = createAction('MY_ACTION_TYPE', arg1 => ({
  foo: arg1
}));

const myAction2 = myActionCreator2('bar2');

console.log(myAction2);
