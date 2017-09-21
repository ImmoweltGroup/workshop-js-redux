// @flow

import {$set} from 'plow-js';
import {handleActions} from 'redux-actions';
import {actions, actionTypes} from './actions.js';

const colorsById = {
  grey: '#e6e6e6',
  blue: '#47a5e3'
};
const initialState = {
  themeColor: colorsById.grey
};
const actionHandlers = {
  [actionTypes.SET_THEME_COLOR]: (state, action) => {
    const color = colorsById[action.payload.themeId];

    return $set('themeColor', color, state);
  }
};
const reducer = handleActions(actionHandlers, initialState);

export {actions, actionTypes, reducer, reducer as default};
