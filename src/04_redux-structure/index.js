// @flow

import store from './store/';
import {actions} from './store/modules/example/';

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('something was dispatched', store.getState());
});

store.dispatch(actions.setFoo(5));
store.dispatch(actions.setBar(239));
store.dispatch(actions.setFoo(10));
