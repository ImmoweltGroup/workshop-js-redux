// @flow

import {$set} from 'plow-js';
import {handleActions} from 'redux-actions';
import {actions, actionTypes} from './actions.js';

const initialState = {
  starWars: {
    charactersById: {}
  }
};
const actionHandlers = {
  [actionTypes.SET_MOVIE_CHARACTERS]: (state, action) => {
    const {characters, movieId} = action.payload;
    const charactersById = characters.reduce((charactersById, character) => {
      return Object.assign(
        {
          [character.id]: character
        },
        charactersById
      );
    }, {});

    return $set([movieId, 'charactersById'], charactersById, state);
  }
};
const reducer = handleActions(actionHandlers, initialState);

export {actions, actionTypes, reducer, reducer as default};
