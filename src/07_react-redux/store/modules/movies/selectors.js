// @flow

import type {validMovieIds} from './types.js';
import {$get} from 'plow-js';

export const getMovieCharactersById = (
  state: Object,
  props: {movieId: validMovieIds}
) => $get(['movies', props.movieId, 'charactersById'], state);
export const getMovieCharacterForId = (
  state: Object,
  props: {movieId: validMovieIds, characterId: string}
) =>
  $get(['movies', props.movieId, 'charactersById', props.characterId], state);
