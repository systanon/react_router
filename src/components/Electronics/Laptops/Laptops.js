import React from 'react';
import { Link } from 'react-router-dom';

import { ELECTRONICS } from './../constant';

export function Laptops({ location }) {
  const { pathname } = location;

  return (
    <div>
      <h2>Laptops</h2>
      <div>
        {ELECTRONICS.Laptops.map(({ mark, id }) => {
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
