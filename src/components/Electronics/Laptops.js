
import React from 'react'
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Laptops = ({location}) =>{
    const { pathname } = location;
    return(
        <div>
            <h1>Laptops</h1>
            <p>PPPPPPPPPP</p>
<div>
        {ELECTRONICS.Laptops.map((mark, index) => {
          return (
            <div key={index}>
              <Link to={`${pathname}/${mark.mark}`}>{mark.mark}</Link>
            </div>
          );
        })}
      </div>
        </div>
    )
}
