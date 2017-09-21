// @flow

import {createAction} from 'redux-actions';

const actionTypes = {
  SET_THEME_COLOR: '@myCompany/myApp/SET_THEME_COLOR'
};

const actions = {
  setThemeColor: createAction(
    actionTypes.SET_THEME_COLOR,
    (themeId: 'grey' | 'blue') => ({
      themeId
    })
  )
};

export {actionTypes, actions};
