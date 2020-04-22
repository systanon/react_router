import React from 'react';

import { ELECTRONICS } from './../constant';

export function LaptopModel({ match, location }) {
  const {
    params: { laptopName, modelId },
  } = match;
  
  const { model } = ELECTRONICS.Laptops.find(({ mark }) => mark === laptopName);
  const { version } = model.find(({ id }) => id === +modelId);

  return (
    <div>
      <h2>{`${laptopName}: model ${modelId}`}</h2>
      <p>{version}</p>
    </div>
  ) ;
}

