import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Electronics, NoMatch, Phones, Laptops, Apple, Samsung, ApplePhone, SamsungPhone, MacLaptop, Mac, LenovoLaptop, Lenovo} from '../components';

export const PrivateRoutes = ({ isLogged }) => {
  const Routes = (
    <Switch>
      {/* <Route path="/profile" component={Profile} />
      <Route path="/films" render={(props) => <Films {...props} />} /> */}
      <Route path="/electronics/telephones/apple/:id" render={(props) => <ApplePhone {...props } />} />
      <Route path="/electronics/telephones/apple" render={(props) => <Apple {...props} />} />
      <Route path="/electronics/telephones/samsung/:id" render={(props) => <SamsungPhone {...props }/>} />
      <Route path="/electronics/telephones/samsung" render={(props) => <Samsung {...props} />} />
      <Route path="/electronics/telephones" render={(props) => <Phones {...props} />} />

      <Route path="/electronics/laptops/mac/:id" render={(props) => <MacLaptop {...props} />} />
      <Route path="/electronics/laptops/mac" render={(props) => <Mac {...props} />} />
      <Route path="/electronics/laptops/lenovo/:id" render={(props) => <LenovoLaptop {...props} />} />
      <Route path="/electronics/laptops/lenovo" render={(props) => <Lenovo {...props} />} />
      <Route path="/electronics/laptops" render={(props) => <Laptops {...props} />} />
      
      <Route path="/electronics" render={(props) => <Electronics {...props} />} />
      <Route path="*">
        {/* <Redirect to="/" /> */}
        <NoMatch />
      </Route>
    </Switch>
  );

  const RedirectToLogin = <Redirect to="/login" />;

  // return <Switch>{isLogged ? Routes : RedirectToLogin}</Switch>;
  return isLogged ? Routes : RedirectToLogin;
};
