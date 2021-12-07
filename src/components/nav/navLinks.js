import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul>
      <li><NavLink to="/posts">Posts</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </ul>
  );
};

export default NavLinks;
