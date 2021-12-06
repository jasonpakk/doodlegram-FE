import React from 'react';
import NavLinks from './navLinks';
import Switch from './switch';

import logo from '../../assets/image.jpeg';

const Navbar = (props) => {
  return (
    <nav style={{ background: '#f8f9fa' }}>
      <div id="navLogo" style={{ color: '#03071e' }}>
        <a href="/" aria-label="home"><img src={logo} alt="logo" /></a>
        <h1>DoodleGram</h1>
      </div>
      <NavLinks />
      <Switch />
    </nav>

  );
};

export default Navbar;
