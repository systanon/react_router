import React from 'react';
import { Link } from 'react-router-dom';

import { ELECTRONICS } from './../constant';

export function Telephone({ match, location }) {
  const { pathname } = location;
  const {
    params: { telephoneName },
  } = match;
   const { model }  = ELECTRONICS.telephones.find(({ mark }) => mark === telephoneName);
  return (
    <div>
      <h2>{`Serie: ${telephoneName}`}</h2>
      {model.map(({ id,version }) => (
        <div key={id}>
          <Link to={`${pathname}/${id}`}>{`Model ${version}`}</Link>
        </div>
      ))}
    </div>
  );
}