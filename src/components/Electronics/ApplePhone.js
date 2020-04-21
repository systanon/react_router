import React from 'react';
import { ELECTRONICS } from './constant';

export const ApplePhone = (props) => {
  let model = {};
  ELECTRONICS.telephones[0].model.forEach(
    (element) => +element.id === +props.match.params.id && (model = element)
  );
  return (
    <div>
      <h1>Phone</h1>
      <p>{`Apple ${model.version}`}</p>
    </div>
  );
};
