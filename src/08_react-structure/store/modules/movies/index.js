// @flow

import {$set} from 'plow-js';
import {handleActions} from 'redux-actions';
import {actions, actionTypes} from './actions.js';
import saga from './saga.js';

const initialState = {
  starWars: {
    charactersById: {}
  }
};
const actionHandlers = {
  [actionTypes.SET_MOVIE_CHARACTERS]: (state, action) => {
    const {charactersById, movieId} = action.payload;

    return $set([movieId, 'charactersById'], charactersById, state);
  }
};
const reducer = handleActions(actionHandlers, initialState);

export {actions, actionTypes, saga, reducer, reducer as default};
