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
import {actions as moviesActions} from './../../store/modules/movies/';
import Button from './../../components/button/';

type OwnPropsType = {
  movieId: validMovieIds
};
type StatePropsType = {};
type DispatchPropsType = {
  loadCharacters: () => mixed
};
type PropsType = OwnPropsType & StatePropsType & DispatchPropsType;

const LoadMovieCharactersBtn = (props: PropsType) => {
  return <Button onClick={props.loadCharacters}>Load characters</Button>;
};

const mapActionCreatorsToProps: DispatchPropsType = {
  loadCharacters: moviesActions.loadStarWarsMovieCharacters
};
const connector: Connector<OwnPropsType, PropsType> = connect(
  null,
  mapActionCreatorsToProps
);

export default connector(LoadMovieCharactersBtn);
