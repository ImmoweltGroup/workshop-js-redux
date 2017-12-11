// @flow

import type {Connector} from 'react-redux';
import type {validMovieIds} from './store/modules/movies/types.js';

import React from 'react';
import {connect} from 'react-redux';
import {getMovieCharacterForId} from './store/modules/movies/selectors.js';

type OwnPropsType = {
  movieId: validMovieIds, // eslint-disable-line react/no-unused-prop-types
  characterId: string // eslint-disable-line react/no-unused-prop-types
};
type StatePropsType = {
  character: Object
};
type DispatchPropsType = {};
type PropsType = OwnPropsType & StatePropsType & DispatchPropsType;

const MovieCharacter = (props: PropsType) => {
  const {character} = props;

  return (
    <div>
      <div className="avatar" />
      <h4 className="characterHeadline">
        Character {character.name} starred in {character.films.length} movies
      </h4>
    </div>
  );
};

const mapStateToProps = (
  state: Object,
  ownProps: OwnPropsType
): StatePropsType => ({
  character: getMovieCharacterForId(state, {
    characterId: ownProps.characterId,
    movieId: ownProps.movieId
  })
});
const mapActionCreatorsToProps: DispatchPropsType = {};
const connector: Connector<OwnPropsType, PropsType> = connect(
  mapStateToProps,
  mapActionCreatorsToProps
);

export default connector(MovieCharacter);
