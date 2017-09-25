// @flow

import {createStore} from 'redux';
import {$set} from 'plow-js';

//
// The reducer is the last Primitive we need to understand to benefit of redux.
// It is a function that gets executed on each dispatched option.
//
// This is the place where you add the update logic of your state,
// since it gets called on each action we need to decide what to update / execute
// based on the type which is included in the action what to update.
//
function moviesReducer(currentState: Object, action: Object) {
  console.log('reducer', currentState, action);

  switch (action.type) {
    case 'SET_MOVIE_CHARACTERS': {
      const {movieId, characters} = action.payload;
      const charactersById = characters.reduce((charactersById, character) => {
        return Object.assign(
          {
            [character.id]: character
          },
          charactersById
        );
      }, {});
      const path = ['moviesById', movieId, 'charactersById'];
      const newState = $set(path, charactersById, currentState);

      return newState;
    }
    default:
      return currentState;
  }
}

//
// Lets create the store with the reducer and listen for updates.
//
const initialState = {
  moviesById: {
    starWars: {
      charactersById: {}
    }
  }
};
const store = createStore(moviesReducer, initialState);

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('something was dispatched', store.getState());
});

//
// Lets define some actionCreators we can dispatch.
//
import {createAction} from 'redux-actions';

type CharacterType = {id: string, name: string};
type validMovieIds = 'starWars' | 'someOtherMovie';

const setMovieCharacters = createAction(
  'SET_MOVIE_CHARACTERS',
  (movieId: validMovieIds, characters: Array<CharacterType>) => ({
    movieId,
    characters
  })
);

store.dispatch(
  setMovieCharacters('starWars', [
    {id: 'afdc303e-992e-4b47-b210-9c4944a527e2', name: 'Darth Vader'},
    {id: 'f1dc647a-4866-427f-8359-53c6f6f9ff16', name: 'C-3PO'},
    {id: 'd4c2e546-2633-40f5-859e-538d62f855ec', name: 'Obi-Wan Kenobi'}
  ])
);
