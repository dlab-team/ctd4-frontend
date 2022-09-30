import { useState } from 'react';
import { SignUp } from 'SignUp';
import { authService } from './services/authService';

export const Signup = () => {
  const [credentialsUser, setCredentialsUser] = useState({
    email: null,
    password: null,
  });

  const getDataSignUp = (e) => {
    if (e.target.id === 'email') {
      setCredentialsUser({ ...credentialsUser, email: e.target.value });
    }
    if (e.target.id === 'password') {
      setCredentialsUser({ ...credentialsUser, password: e.target.value });
    }
  };

  const getAuthentication = () => {
    authService(credentialsUser, 'endpoint');
  };

  return (
    <>
      <SignUp />
    </>
  );
};
