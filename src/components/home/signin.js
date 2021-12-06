import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signinUser } from '../../actions';

const submit = (username, password, props) => {
  props.signinUser({ username, password }, props.history);
};

const SignIn = (props) => {
  const [user, setUser] = useState('');
  const [pw, setPW] = useState('');

  return (
    <div>
      <div className="signForm">
        <h1>Sign In</h1>
        <p>{props.error ? 'Error Signing in. Please Try Again.' : ''}</p>
        <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e) => setPW(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={() => submit(user, pw, props)}>Log In</button>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  welcome: reduxState.home.message,
  auth: reduxState.auth.authenticated,
  user: reduxState.auth.userObject,
  error: reduxState.auth.error,
});

export default withRouter(connect(mapStateToProps, { signinUser })(SignIn));
