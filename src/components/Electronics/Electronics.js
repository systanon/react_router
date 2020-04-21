import React from 'react';
import { Link } from 'react-router-dom';

import { ELECTRONICS } from './constant';

export function  Electronics ({ location }) {
  const { pathname } = location;

  return (
    <div>
      <h2>Electronics</h2>
      <div>
        {Object.keys(ELECTRONICS).map((item, index) => {
          return (
            <div key={index}>
              <Link to={`${pathname}/${item}`}>{item}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
