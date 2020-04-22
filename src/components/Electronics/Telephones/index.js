import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Telephones } from './Telephones';
import { Telephone } from './Telephone';
import { TelephoneModel } from './TelephoneModel';

export const TelephonePage = ({ match }) => {
  const { path } = match;
  return (
    <Switch>
      <Route exact path={path} component={Telephones} />
      <Route exact path={`${path}/:telephoneName`} component={Telephone} />
      <Route
        exact
        path={`${path}/:telephoneName/:modelId`}
        component={TelephoneModel}
      />
    </Switch>
  );
};
