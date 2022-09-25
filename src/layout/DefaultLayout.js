import React from 'react';
import { Outlet } from 'react-router-dom';
import { Login } from './../components/login/Login'

const DefaultLayout = () => {
  return (
    <>
      <Login />
      <Outlet />
      {/* <LandingPage /> */}
    </>
  );
};

export default DefaultLayout;
