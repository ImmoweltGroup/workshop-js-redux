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
import {getMovieCharacterForId} from './../../store/modules/movies/selectors.js';
import Avatar from './../../components/avatar/';

type OwnPropsType = {
  movieId: validMovieIds,
  characterId: string
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
      <Avatar />
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
