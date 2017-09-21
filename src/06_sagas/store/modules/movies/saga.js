import {put, takeLatest} from 'redux-saga/effects';
import {actions, actionTypes} from './actions.js';

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

export default function*() {
  yield takeLatest(
    actionTypes.LOAD_STAR_WARS_MOVIE_CHARACTERS,
    loadStarWarsMovieCharacters
  );
}
