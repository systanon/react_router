import React from 'react';
import { useHistory } from 'react-router-dom';

export function Login({ toggleLoggingState }) {
  const history = useHistory();

  const logIn = () => {
    toggleLoggingState(true);

    history.push('/');
  };

  return (
    <h2>
      <button type="button" onClick={logIn}>
        Login
      </button>
    </h2>
  );
}


