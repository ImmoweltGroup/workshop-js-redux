// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import DefaultLayout from './layouts/default/';
import store from './store/';

ReactDOM.render(
  <Provider store={store}>
    <DefaultLayout />
  </Provider>,

  // $FlowFixMe: Flow throws an error since getElementById could return `null`. This seems like a bug in flow itself?
  document.getElementById('playground')
);
