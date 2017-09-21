// @flow

import React from 'react';
import Logo from './../../components/logo/';
import {connect} from 'react-redux';

type PropsType = {
  currentThemeColor: string
};

const Header = (props: PropsType) => {
  const {currentThemeColor} = props;
  const inlineStyle = {
    minHeight: '200px',
    padding: '0 0 20px',
    background: currentThemeColor
  };

  return (
    <div style={inlineStyle}>
      <Logo />
      <br />
      This is some fancy schmancy header!
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentThemeColor: state.system.themeColor
});
const withStateProps = connect(mapStateToProps);

export default withStateProps(Header);
