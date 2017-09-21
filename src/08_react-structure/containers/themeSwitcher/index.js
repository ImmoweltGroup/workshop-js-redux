// @flow

import React from 'react';
import {connect} from 'react-redux';
import Button from './../../components/button/';
import {actions as systemActions} from './../../store/modules/system/';

type PropsType = {
  targetThemeId: string,
  handleSetThemeColor: Function
};

const ThemeSwitcher = (props: PropsType) => {
  const {targetThemeId, handleSetThemeColor} = props;

  return (
    <Button onClick={handleSetThemeColor}>
      Switch the color to {targetThemeId}!
    </Button>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<*>, ownProps) => ({
  handleSetThemeColor() {
    return dispatch(systemActions.setThemeColor(ownProps.targetThemeId));
  }
});
const withStateProps = connect(null, mapDispatchToProps);

export default withStateProps(ThemeSwitcher);
