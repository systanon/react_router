import React from 'react';
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Apple = ({ location }) => {
  const { pathname } = location;
  return (
    <div>
      <h1>Phones</h1>
      <p>Apple</p>
      <div>
        {ELECTRONICS.telephones[0].model.map(({ id, version }, index) => {
          //{ name, id }
          return (
            <div key={index}>
              <Link to={`${pathname}/${id}`}>{`Apple: ${version}`}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
