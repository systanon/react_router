import React from 'react';
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Mac = ({ location }) => {
  const { pathname } = location;
  return (
    <div>
      <h1>Laptop</h1>
      <p>Mac</p>
      <div>
        {ELECTRONICS.Laptops[0].model.map(({ id, version }, index) => {
          //{ name, id }
          return (
            <div key={index}>
              <Link to={`${pathname}/${id}`}>{`Mac: ${version}`}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

