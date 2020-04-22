import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Laptops } from './Laptops';
import { Laptop } from './Laptop';
import { LaptopModel } from './LaptopModel';

export const LaptopPage = ({ match }) => {
  const { path } = match;
  return (
    <Switch>
      <Route exact path={path} component={Laptops} />
      <Route exact path={`${path}/:laptopName`} component={Laptop} />
      <Route
        exact
        path={`${path}/:laptopName/:modelId`}
        component={LaptopModel}
      />
    </Switch>
  );
};
