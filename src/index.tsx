import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      { Routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)