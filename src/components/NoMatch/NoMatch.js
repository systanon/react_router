import React from 'react';
import { useLocation } from 'react-router-dom';

export function NoMatch() {
  const { pathname } = useLocation();

  return <h2>This page not found: {pathname}</h2>;
}
