// @flow

type CharacterType = {id: string, name: string};
type validMovieIds = 'starWars' | 'someOtherMovie';

//
// An action, or `action object` is an object which represent the task and
// it's arguments you want your application to execute.
//
const myActionObj = {
  // The action must include a property `type` - It's a string that your application should use
  // to identify the logic it needs to execute.
  type: 'SET_MOVIE_CHARACTERS',

  // The payload is an object of arguments that you can specify.
  // This object can be structured the way you and the logic the action executes requires.
  payload: {
    movieId: 'starWars',
    characters: [
      {id: 'afdc303e-992e-4b47-b210-9c4944a527e2', name: 'Darth Vader'}
    ]
  }
};

console.log(myActionObj);

//
// Since creating the object over and over again throughout your application creates code duplication,
// redux introduces the `actionCreator` pattern.
//
// The `actionCreator` is a function that you can pass your optional arguments,
// it will return the finalized action object.
//
// This is your API to interact with redux,
// it reduces code duplication and defines the action object shape in one single place.
//
function setMovieCharacters1(
  movieId: validMovieIds,
  characters: Array<CharacterType>
) {
  return {
    type: 'SET_MOVIE_CHARACTERS',
    payload: {
      movieId,
      characters
    }
  };
}

const myAction1 = setMovieCharacters1('starWars', [
  {id: 'afdc303e-992e-4b47-b210-9c4944a527e2', name: 'Darth Vader'}
]);

console.log(myAction1);

//
// But we can do even better, code reduction is everything!
// The package `redux-actions` comes with a helper function which creates the
// standardized structure for you and returns your actionCreator function.
//
// The first argument is the actionType string and the second an
// optional function that returns the action payload structure.
//
import {createAction} from 'redux-actions';

const setMovieCharacters = createAction(
  'SET_MOVIE_CHARACTERS',
  (movieId: string, characters: Array<CharacterType>) => ({
    movieId,
    characters
  })
);

const myAction2 = setMovieCharacters('starWars', [
  {id: 'afdc303e-992e-4b47-b210-9c4944a527e2', name: 'Darth Vader'}
]);

console.log(myAction2);
