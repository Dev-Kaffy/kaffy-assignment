import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import '../assets/scss/navbar.scss';

export const Layout = () => {
  return (
    <>
      <nav className="NavBar">
        <img src={Logo} alt="navlogo" />
        <ul className="NavLink">
          <Link to="/">Home</Link>
          <Link to="/players">Users</Link>
          <Link to="/">About</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
