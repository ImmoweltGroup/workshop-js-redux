// @flow

import React from 'react';
import {connect} from 'react-redux';

type PropsType = {
  currentThemeColor: string
};

const Footer = (props: PropsType) => {
  const {currentThemeColor} = props;
  const inlineStyle = {
    minHeight: '200px',
    padding: '75px 0',
    background: currentThemeColor
  };

  return (
    <div style={inlineStyle}>
      This is some fancy schmancy footer rendered in {currentThemeColor}!
      <br />
      <img alt="meh..." src="https://i.imgur.com/JcUS8b7.gif" />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentThemeColor: state.system.themeColor
});
const withStateProps = connect(mapStateToProps);

export default withStateProps(Footer);
