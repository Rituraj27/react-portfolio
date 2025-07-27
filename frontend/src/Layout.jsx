import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Header from './components/Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/*  */}
    </>
  );
}
