import React from 'react'
import { Link } from 'react-router-dom';
import { ELECTRONICS } from './constant';

export const Phones = ({location}) =>{
    const { pathname } = location;
    return(
        <div>
            <h1>Phones</h1>
            <p>PPPPPPPPPP</p>
<div>
        {ELECTRONICS.telephones.map((mark, index) => {//{ name, id }
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


// export function  Electronics ({ location }) {
//   const { pathname } = location;

//   return (
//     <div>
//       <h2>Electronics</h2>
      
//     </div>
//   );
// }