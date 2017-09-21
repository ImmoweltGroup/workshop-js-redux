// @flow

import type {Connector} from 'react-redux';
import type {validMovieIds} from './store/modules/movies/types.js';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store/';
import {actions as moviesActions} from './store/modules/movies/';
import {getMovieCharacterIds} from './store/modules/movies/selectors.memoized.js';
import Character from './character.js';

type OwnPropsType = {
  movieId: validMovieIds
};
type StatePropsType = {
  characterIds: Array<string>
};
type DispatchPropsType = {
  loadCharacters: () => mixed
};
type PropsType = OwnPropsType & StatePropsType & DispatchPropsType;

const MovieCharacterList = (props: PropsType) => {
  const {movieId, characterIds, loadCharacters} = props;

  return (
    <div>
      <h2>Characters for movie {movieId}:</h2>
      <button onClick={loadCharacters}>Load characters</button>
      <br />
      <br />
      {characterIds.map(id => (
        <Character key={id} movieId={movieId} characterId={id} />
      ))}
    </div>
  );
};

const mapStateToProps = (
  state: Object,
  ownProps: OwnPropsType
): StatePropsType => ({
  characterIds: getMovieCharacterIds(state, {movieId: ownProps.movieId})
});
const mapActionCreatorsToProps: DispatchPropsType = {
  loadCharacters: moviesActions.loadStarWarsMovieCharacters
};
const connector: Connector<OwnPropsType, PropsType> = connect(
  mapStateToProps,
  mapActionCreatorsToProps
);
const ConnectedMovieCharacterList = connector(MovieCharacterList);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMovieCharacterList movieId="starWars" />
  </Provider>,
  document.getElementById('playground')
);
