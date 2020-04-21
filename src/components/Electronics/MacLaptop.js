import React from 'react';
import { ELECTRONICS } from './constant';

export const MacLaptop = (props) => {
  let model = {};
  ELECTRONICS.Laptops[0].model.forEach(
    (element) => +element.id === +props.match.params.id && (model = element)
  );
  return (
    <div>
      <h1>Laptop</h1>
      <p>{`Mac ${model.version}`}</p>
    </div>
  );
};
