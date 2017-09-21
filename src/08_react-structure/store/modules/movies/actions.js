// @flow

import type {validMovieIds} from './types.js';

import {createAction} from 'redux-actions';

const actionTypes = {
  SET_MOVIE_CHARACTERS: '@myCompany/movies/SET_MOVIE_CHARACTERS',
  LOAD_STAR_WARS_MOVIE_CHARACTERS:
    '@myCompany/movies/LOAD_STAR_WARS_MOVIE_CHARACTERS'
};

const actions = {
  setMovieCharacters: createAction(
    actionTypes.SET_MOVIE_CHARACTERS,
    (movieId: validMovieIds, charactersById: Object) => ({
      movieId,
      charactersById
    })
  ),
  loadStarWarsMovieCharacters: createAction(
    actionTypes.LOAD_STAR_WARS_MOVIE_CHARACTERS
  )
};

export {actionTypes, actions};
