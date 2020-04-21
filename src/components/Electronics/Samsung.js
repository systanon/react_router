import React from 'react';
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Samsung = ({ location }) => {
  const { pathname } = location;
  return (
    <div>
      <h1>Phones</h1>
      <p>Samsung</p>
      <div>
        {ELECTRONICS.telephones[1].model.map(({ id, version }, index) => {
          //{ name, id }
          return (
            <div key={index}>
              <Link to={`${pathname}/${id}`}>{`Samsung: ${version}`}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
