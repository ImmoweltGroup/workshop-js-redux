// @flow

//
// Layouts are responsible to setup, as the name suggests, the layout of your application.
// E.g. if your app includes a Header, Footer, Main content area and a sidebar,
// this is the place to compose all of them into the grid which
// results in your application layout.
//

import React from 'react';
import MovieCharacterList from './../../containers/movieCharacterList/';
import LoadMovieCharactersBtn from './../../containers/loadMovieCharactersBtn/';

type PropsType = {};

const DefaultLayout = (props: PropsType) => {
  const movieId = 'starWars';

  return (
    <div>
      <h2>Characters for Star wars:</h2>
      <LoadMovieCharactersBtn movieId={movieId} />
      <MovieCharacterList movieId={movieId} />
      <LoadMovieCharactersBtn movieId={movieId} />
    </div>
  );
};

export default DefaultLayout;
