import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Electronics, NoMatch, LaptopPage, TelephonePage } from '../components';

export const PrivateRoutes = ({ isLogged }) => {
  const Routes = (
    <Switch>
      <Route
        path='/electronics/telephones'
        render={(props) => {
          return <TelephonePage {...props} />;
        }}
      />
      <Route
        path='/electronics/laptops'
        render={(props) => {
          return <LaptopPage {...props} />;
        }}
      />
      <Route
        path='/electronics'
        render={(props) => <Electronics {...props} />}
      />
      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>
  );

  const RedirectToLogin = <Redirect to='/login' />;
  return isLogged ? Routes : RedirectToLogin;
};
