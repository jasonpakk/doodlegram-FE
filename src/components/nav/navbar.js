import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import NavLinks from './navLinks';

import { helloWorld, signoutUser } from '../../actions';
import logo from '../../assets/image.jpeg';

const signOut = (props) => {
  props.signoutUser(props.history);
};

const Navbar = (props) => {
  useEffect(() => {
    props.helloWorld();
  });

  if (props.auth) {
    return (
      <nav>
        <div id="navLogo" style={{ color: '#03071e' }}>
          <a href="/" aria-label="home"><img src={logo} alt="logo" /></a>
          <h1>DoodleGram</h1>
          <button type="button" onClick={() => signOut(props)}>Sign Out</button>
        </div>
        <NavLinks />
      </nav>
    );
  } else if (props.welcome) {
    return null;
  } else {
    return (
      <div>
        <ReactLoading type="spinningBubbles" color="white" height="20%" width="20%" />
      </div>
    );
  }
};

const mapStateToProps = (reduxState) => ({
  welcome: reduxState.home.message,
  auth: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { helloWorld, signoutUser })(Navbar));
