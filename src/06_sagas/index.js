// @flow

import store from './store/';
import {actions} from './store/modules/movies/';
import {getMovieCharactersById} from './store/modules/movies/selectors.js';
import {getMovieCharacterIds} from './store/modules/movies/selectors.memoized.js';

//
// Lets listen for updates and query the state.
//
store.subscribe(() => {
  const state = store.getState();
  const starWarsCharactersById = getMovieCharactersById(state, {
    movieId: 'starWars'
  });
  const starWarsCharacterIds = getMovieCharacterIds(state, {
    movieId: 'starWars'
  });

  console.log('results', starWarsCharacterIds, starWarsCharactersById);
  console.log('\n');
});

store.dispatch(actions.loadStarWarsMovieCharacters());
