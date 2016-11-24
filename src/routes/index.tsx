import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import * as Containers from '../containers';

export default (
  <Route path='/' component={ Containers.App }>
    <IndexRoute component={ Containers.Home } />
    <Route path='about' component={ Containers.About } />
    <Route path='counter' component={ Containers.Counter } />
  </Route>
)