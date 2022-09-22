import React from 'react';
import { Outlet } from 'react-router-dom';
import { LandingPage } from '../views/LandingPage';

const DefaultLayout = () => {
  return (
    <>
      {/* <Outlet /> */}
      <LandingPage />
    </>
  );
};

export default DefaultLayout;
