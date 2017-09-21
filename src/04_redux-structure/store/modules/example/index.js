// @flow

import {$set} from 'plow-js';
import {handleActions} from 'redux-actions';
import {actions, actionTypes} from './actions.js';

const initialState = {
  foo: 1,
  bar: 4
};
const actionHandlers = {
  [actionTypes.SET_FOO]: (state, action) =>
    $set('foo', action.payload.foo, state),
  [actionTypes.SET_BAR]: (state, action) =>
    $set('bar', action.payload.bar, state)
};
const reducer = handleActions(actionHandlers, initialState);

export {actions, actionTypes, reducer, reducer as default};
