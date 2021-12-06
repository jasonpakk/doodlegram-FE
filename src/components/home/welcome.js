import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { signoutUser } from '../../actions';

const signOut = (props) => {
  props.signoutUser(props.history);
};

const Welcome = (props) => {
  return (
    <div>
      {props.auth ? (
        <div>
          <li><button type="button" onClick={() => signOut(props)}>Sign Out</button></li>
        </div>
      ) : (
        <div>
          <li><NavLink to="/signin"><button type="button">Sign In</button></NavLink></li>
          <li><NavLink to="/signup"><button type="button">Sign Up</button></NavLink></li>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  auth: reduxState.auth.authenticated,
  user: reduxState.auth.userObject,
});

export default withRouter(connect(mapStateToProps, { signoutUser })(Welcome));
