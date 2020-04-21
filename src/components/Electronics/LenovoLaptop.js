import React from 'react';
import { ELECTRONICS } from './constant';

export const LenovoLaptop = (props) => {
  let model = {};
  ELECTRONICS.Laptops[1].model.forEach(
    (element) => +element.id === +props.match.params.id && (model = element)
  );
  return (
    <div>
      <h1>Laptop</h1>
      <p>{`Lenovo ${model.version}`}</p>
    </div>
  );
};
