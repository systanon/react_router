import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  Login,
} from '../components';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = ({ isLogged, toggleLoggingState }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}>
        <Login toggleLoggingState={toggleLoggingState} />
      </Route>
      <PrivateRoutes isLogged={isLogged} />
    </Switch>
  );
};
