import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
// import ParticleBG from './particleBG';
import { signupUser } from '../../actions';

const submit = (email, username, password, props) => {
  props.signupUser({ username, email, password }, props.history);
};

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pw, setPW] = useState('');

  return (
    <div>
      <div className="welcomeScreen">
        <div className="welcomeText">
          <h1>Register</h1>
          <NavLink to="/signin"><p>Already Have an Account?</p></NavLink>
          <p style={{ color: '#e5383b' }}>{props.error ? 'Error Creating Account, Please Try Again.' : ''}</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Username" />
          <input type="password" onChange={(e) => setPW(e.target.value)} placeholder="Password" />
          <button type="submit" onClick={() => submit(email, user, pw, props)}>Register</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  auth: reduxState.auth.authenticated,
  user: reduxState.auth.userObject,
  error: reduxState.auth.error,
});

export default withRouter(connect(mapStateToProps, { signupUser })(SignUp));
