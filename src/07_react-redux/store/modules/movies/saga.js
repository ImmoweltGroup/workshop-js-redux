import {put, takeLatest} from 'redux-saga/effects';
import {actions, actionTypes} from './actions.js';

function* loadStarWarsMovieCharacters(action) {
  const response = yield fetch('https://swapi.co/api/people');
  const json = yield response.json();

  yield put(actions.setMovieCharacters('starWars', json.results));
}

export default function*() {
  yield takeLatest(
    actionTypes.LOAD_STAR_WARS_MOVIE_CHARACTERS,
    loadStarWarsMovieCharacters
  );
}
