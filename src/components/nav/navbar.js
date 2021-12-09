import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';

// import { helloWorld } from '../../actions';

const Navbar = (props) => {
  /*
  useEffect(() => {
    props.helloWorld();
  });
  */

  if (props.auth) {
    return (
      <nav>
        <NavLink to="/doodles"><p className="emoji">🖼️</p></NavLink>
        <h1>DoodleGram 🖌️</h1>
        <NavLink to="/profile"><p className="emoji">👤</p></NavLink>
      </nav>
    );
  } else {
    return (
      <div>
        <ReactLoading type="spinningBubbles" color="white" height="20%" width="20%" />
      </div>
    );
  }
};

const mapStateToProps = (reduxState) => ({
  // welcome: reduxState.home.message,
  auth: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { })(Navbar));
