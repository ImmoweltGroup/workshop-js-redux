// @flow

import store from './store/';
import {actions} from './store/modules/movies/';
import {getMovieCharactersById} from './store/modules/movies/selectors.js';

//
// Lets listen for updates and query the state.
//
store.subscribe(() => {
  const state = store.getState();
  const charactersById = getMovieCharactersById(state, {movieId: 'starWars'});

  console.log('results', charactersById);
  console.log('\n');
});

store.dispatch(actions.loadStarWarsMovieCharacters());
