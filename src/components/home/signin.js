import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import ParticleBG from './particleBG';
import { signinUser } from '../../actions';

const submit = (username, password, props) => {
  props.signinUser({ username, password }, props.history);
};

const SignIn = (props) => {
  const [user, setUser] = useState('');
  const [pw, setPW] = useState('');

  return (
    <div>
      <div className="welcomeScreen">
        <ParticleBG />
        <div className="welcomeText">
          <h1>Sign In</h1>
          <NavLink to="/signup"><p>Need to Create an Account?</p></NavLink>
          <p style={{ color: '#e5383b' }}>{props.error ? 'Error Signing In, Please Try Again.' : ''}</p>
          <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Username" />
          <input type="password" onChange={(e) => setPW(e.target.value)} placeholder="Password" />
          <button type="submit" onClick={() => submit(user, pw, props)}>Log In</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject,
  error: reduxState.auth.error,
});

export default withRouter(connect(mapStateToProps, { signinUser })(SignIn));
