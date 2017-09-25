// @flow

import type {validMovieIds, CharacterType} from './types.js';

import {createAction} from 'redux-actions';

const actionTypes = {
  SET_MOVIE_CHARACTERS: '@myCompany/movies/SET_MOVIE_CHARACTERS'
};

const actions = {
  setMovieCharacters: createAction(
    actionTypes.SET_MOVIE_CHARACTERS,
    (movieId: validMovieIds, characters: Array<CharacterType>) => ({
      movieId,
      characters
    })
  )
};

export {actionTypes, actions};
