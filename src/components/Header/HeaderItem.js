import React from 'react';
import { NavLink } from 'react-router-dom';

export function HeaderItem({ path, title }) {
  return (
    <li className="header-item">
      <NavLink exact to={path} activeClassName="active">
        {title}
      </NavLink>
    </li>
  );
}
