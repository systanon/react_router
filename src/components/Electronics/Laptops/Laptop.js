import React from 'react';
import { Link } from 'react-router-dom';

import { ELECTRONICS } from './../constant';

export function Laptop({ match, location }) {
  const { pathname } = location;
  const {
    params: { laptopName },
  } = match;
   const { model }  = ELECTRONICS.Laptops.find(({ mark }) => mark === laptopName);
  return (
    <div>
      <h2>{`Serie: ${laptopName}`}</h2>
      {model.map(({ id,version }) => (
        <div key={id}>
          <Link to={`${pathname}/${id}`}>{`Model ${version}`}</Link>
        </div>
      ))}
    </div>
  );
}