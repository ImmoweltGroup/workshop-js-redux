// @flow

import React from 'react';
import Header from './../../containers/header/';
import Footer from './../../containers/footer/';
import ThemeSwitcher from './../../containers/themeSwitcher/';

type PropsType = {};

const DefaultLayout = (props: PropsType) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Header />
      <div style={{padding: '50px'}}>
        <ThemeSwitcher targetThemeId="blue" />
        <ThemeSwitcher targetThemeId="grey" />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
