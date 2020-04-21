import React from 'react'
import { ELECTRONICS } from './constant';

export const SamsungPhone = (props) =>{
  let model = {};
  ELECTRONICS.telephones[1].model.forEach(
    (element) => +element.id === +props.match.params.id && (model = element)
  );
    return(
      <div>
        <h1>Phone</h1>
        <p>{`Samsung ${model.version}`}</p>
      </div>
    )
}
