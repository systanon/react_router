import React from 'react';
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Lenovo = ({ location }) => {
  const { pathname } = location;
  return (
    <div>
      <h1>Laptop</h1>
      <p>Lenovo</p>
      <div>
        {ELECTRONICS.Laptops[1].model.map(({ id, version }, index) => {
          return (
            <div key={index}>
              <Link to={`${pathname}/${id}`}>{`Lenovo: ${version}`}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

