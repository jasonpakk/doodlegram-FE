import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul>
      <li><NavLink to="/doodles">Doodles</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </ul>
  );
};

export default NavLinks;
