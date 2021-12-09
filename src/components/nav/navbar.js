import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { helloWorld } from '../../actions';

const Navbar = (props) => {
  useEffect(() => {
    props.helloWorld();
  });

  if (props.auth) {
    return (
      <nav>
        <NavLink to="/doodles"><p className="emoji">🖼️</p></NavLink>
        <h1>DoodleGram 🖌️</h1>
        <NavLink to="/profile"><p className="emoji">👤</p></NavLink>
      </nav>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (reduxState) => ({
  welcome: reduxState.home.message,
  auth: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { helloWorld })(Navbar));
