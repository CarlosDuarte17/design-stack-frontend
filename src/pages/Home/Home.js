import React from 'react';
import { Outlet } from 'react-router-dom';
import { Home as HomeContent } from '../../components/Home';

export function Home() {
  return (
    <>
      <HomeContent />
      <Outlet />
    </>
  );
}
