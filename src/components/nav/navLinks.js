import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavLinks;
