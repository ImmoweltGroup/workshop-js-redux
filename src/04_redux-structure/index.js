// @flow

import store from './store/';
import {actions} from './store/modules/movies/';

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('something was dispatched', store.getState());
});

store.dispatch(
  actions.setMovieCharacters('starWars', [
    {id: 'afdc303e-992e-4b47-b210-9c4944a527e2', name: 'Darth Vader'},
    {id: 'f1dc647a-4866-427f-8359-53c6f6f9ff16', name: 'C-3PO'},
    {id: 'd4c2e546-2633-40f5-859e-538d62f855ec', name: 'Obi-Wan Kenobi'}
  ])
);
