import React from 'react';

import { ELECTRONICS } from './../constant';

export function TelephoneModel({ match, location }) {
  const {
    params: { telephoneName, modelId },
  } = match;
  
  const { model } = ELECTRONICS.telephones.find(({ mark }) => mark === telephoneName);
  const { version } = model.find(({ id }) => id === +modelId);

  return (
    <div>
      <h2>{`${telephoneName}: model ${modelId}`}</h2>
      <p>{version}</p>
    </div>
  ) ;
}