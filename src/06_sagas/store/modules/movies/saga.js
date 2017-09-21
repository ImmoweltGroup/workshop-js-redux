import {put, takeLatest} from 'redux-saga/effects';
import {actions, actionTypes} from './actions.js';

//
// Sagas are the most powerful and flexible way of creating
// side-effects in your Redux state.
//
// A side-effect is e.g. an asynchronous tasks or actions that
// dispatch other actions.
//
function* loadStarWarsMovieCharacters(action) {
  console.log(
    'An action with the type "LOAD_STAR_WARS_MOVIE_CHARACTERS" was dispatched',
    action
  );

  console.log('loading star wars characters');
  const response = yield fetch('https://swapi.co/api/people');
  console.log('star wars characters loaded');
  const json = yield response.json();

  console.log('dispatching a new action which sets the characters');
  yield put(actions.setMovieCharacters('starWars', json.results));
}

//
// We export the finalized saga using the takeLatest effect of redux-saga.
// This little helper will execute the given generator function each time
// the given actionType was dispatched on the store with a neat cancelation
// feature.
//
// E.g. it will cancel already running instances if the action got
// dispatched multiple times in a row to avoid nasty edge cases like
// races between requests.
//
export default function*() {
  yield takeLatest(
    actionTypes.LOAD_STAR_WARS_MOVIE_CHARACTERS,
    loadStarWarsMovieCharacters
  );
}
