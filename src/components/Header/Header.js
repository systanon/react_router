import React from 'react';
import { HeaderItem } from './HeaderItem';
import { HEADER_ROUTES } from './constant';

import './index.css';

export function Header({ isLogged, toggleLoggingState }) {
  let paths = [...HEADER_ROUTES];
  paths.push(
    !isLogged
      ? { path: '/login', title: 'Login' }
      : { path: '/electronics', title: 'Electronics' }
  );

  return (
    <header className='header'>
      <nav>
        <ul className='header-list'>
          {paths.map((route) => (
            <HeaderItem {...route} key={route.path} />
          ))}
        </ul>
      </nav>
      {isLogged && (
        <button
          type='button'
          className='header-logout'
          onClick={() => toggleLoggingState(false)}
        >
          Logout
        </button>
      )}
    </header>
  );
}
