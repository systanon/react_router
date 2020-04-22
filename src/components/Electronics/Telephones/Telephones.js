import React from 'react';
import { Link } from 'react-router-dom';

import { ELECTRONICS } from './../constant';

export function Telephones({ location }) {
  const { pathname } = location;

  return (
    <div>
      <h2>Telephones</h2>
      <div>
        {ELECTRONICS.telephones.map(({ mark, id }) => {
          return (
            <div key={mark}>
              <Link to={`${pathname}/${mark}`}>{mark}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
