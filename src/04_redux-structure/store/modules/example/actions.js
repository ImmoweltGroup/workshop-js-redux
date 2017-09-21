// @flow

import {createAction} from 'redux-actions';

const actionTypes = {
  SET_FOO: '@myCompany/myApp/SET_FOO',
  SET_BAR: '@myCompany/myApp/SET_BAR'
};

const actions = {
  setFoo: createAction(actionTypes.SET_FOO, foo => ({
    foo
  })),
  setBar: createAction(actionTypes.SET_BAR, bar => ({
    bar
  }))
};

export {actionTypes, actions};
