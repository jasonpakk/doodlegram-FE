import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { helloWorld } from '../../actions';

const SignUp = (props) => {
  return (
    <div>
      <button type="button" onClick={props.helloWorld}>Press for Message!</button>
      <p>{props.welcome}</p>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  welcome: reduxState.home.message,
});

export default withRouter(connect(mapStateToProps, { helloWorld })(SignUp));
