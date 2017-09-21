// @flow

//
// Containers are React Components which got enriched with data from your application store.
//
// A seperation between Components and Containers is usefull since you should be able to
// know which one is bound to your application(Containers) and which you can sasfely
// use in another context(Components) without having to worry if the store module
// is available or not.
//
// Components = Abstract UI elements
// Containers = UI element compositions with a connection to your application state
//

import type {Connector} from 'react-redux';
import type {validMovieIds} from './../../store/modules/movies/types.js';

import React from 'react';
import {connect} from 'react-redux';
import {getMovieCharacterIds} from './../../store/modules/movies/selectors.memoized.js';
import Character from './character.js';

type OwnPropsType = {
  movieId: validMovieIds
};
type StatePropsType = {
  characterIds: Array<string>
};
type DispatchPropsType = {};
type PropsType = OwnPropsType & StatePropsType & DispatchPropsType;

const MovieCharacterList = (props: PropsType) => {
  const {movieId, characterIds} = props;

  return (
    <div>
      {characterIds.length ? null : 'No characters loaded yet...'}
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
const mapActionCreatorsToProps: DispatchPropsType = {};
const connector: Connector<OwnPropsType, PropsType> = connect(
  mapStateToProps,
  mapActionCreatorsToProps
);

export default connector(MovieCharacterList);
