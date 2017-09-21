// @flow

import type {Dispatch} from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store/';
import {actions as systemActions} from './store/modules/system/';

type PropsType = {
  currentThemeColor: string,
  handleSetThemeColorBlue: Function,
  handleSetThemeColorGrey: Function
};

const App = (props: PropsType) => {
  const {
    currentThemeColor,
    handleSetThemeColorBlue,
    handleSetThemeColorGrey
  } = props;

  return (
    <div style={{textAlign: 'center'}}>
      <div
        className="header"
        style={{
          minHeight: '200px',
          padding: '75px 0',
          background: currentThemeColor
        }}
      >
        <img
          alt="some fancy logo"
          src="https://upload.wikimedia.org/wikipedia/en/0/06/Fancy.com_logo_2016.png"
        />
        <br />
        This is some fancy schmancy header!
        <br />
      </div>

      <div className="contents" style={{padding: '50px'}}>
        <button onClick={handleSetThemeColorGrey}>
          Switch the color to grey!
        </button>

        <button onClick={handleSetThemeColorBlue}>
          Switch the color to blue!
        </button>
      </div>

      <div
        className="footer"
        style={{
          minHeight: '200px',
          padding: '75px 0',
          background: currentThemeColor
        }}
      >
        This is some fancy schmancy footer rendered in {currentThemeColor}!
        <br />
        <img alt="meh..." src="https://i.imgur.com/JcUS8b7.gif" />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentThemeColor: state.system.themeColor
});
const mapDispatchToProps = (dispatch: Dispatch<*>, ownProps) => ({
  handleSetThemeColorGrey() {
    return dispatch(systemActions.setThemeColor('grey'));
  },
  handleSetThemeColorBlue() {
    return dispatch(systemActions.setThemeColor('blue'));
  }
});
const withStateProps = connect(mapStateToProps, mapDispatchToProps);
const ConnectedApp = withStateProps(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('playground')
);
