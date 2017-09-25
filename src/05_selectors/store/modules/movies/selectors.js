// @flow

import type {validMovieIds} from './types.js';
import {$get} from 'plow-js';

export const getMovieCharactersById = (
  state: Object,
  props: {movieId: validMovieIds}
) => {
  return $get(['movies', props.movieId, 'charactersById'], state);
};
