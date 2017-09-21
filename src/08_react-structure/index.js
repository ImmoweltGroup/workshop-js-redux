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
  document.getElementById('playground')
);
