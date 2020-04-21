import React, { useState } from 'react';
import {
  createBrowserHistory,
} from 'history';
import {
  Router,
} from 'react-router-dom';

import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

import './App.css';

const history = createBrowserHistory();

export default function App() {
  const [isLogged, toggleLoggingState] = useState(false);

  return (
    <Router history={history}>
      <Header isLogged={isLogged} toggleLoggingState={toggleLoggingState} />
      <AppRouter isLogged={isLogged} toggleLoggingState={toggleLoggingState} />
    </Router>
  );
}
