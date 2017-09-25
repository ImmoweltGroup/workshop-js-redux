// @flow

import {createSelector} from 'reselect';
import {getMovieCharactersById} from './selectors.js';

export const getMovieCharacterIds = createSelector(
  [getMovieCharactersById],
  charactersById => {
    return Object.keys(charactersById);
  }
);
