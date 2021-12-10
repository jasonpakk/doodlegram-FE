import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from '../home/welcome';
import Profile from '../profile/profile';
import SignIn from '../home/signin';
import SignUp from '../home/signup';
import EditProfile from '../profile/edit_profile';
import Doodles from '../doodles/doodles';
import Canvas from '../canvas/canvas';
import OtherProfile from '../profile/other_profile';

const FallBack = (props) => {
  return <Redirect to="/" />;
};

const FallBackAuth = (props) => {
  return <Redirect to="/doodles" />;
};

const Nav = (props) => {
  if (props.auth) {
    return (
      <Switch>
        <Route exact path="/" component={Welcome}>
          <Redirect to="/doodles" />
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route exact path="/profile/:id" component={OtherProfile} />
        <Route path="/profile" component={Profile} />
        <Route path="/doodles" component={Doodles} />
        <Route path="/canvas" component={Canvas} />
        <Route component={FallBackAuth} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route component={FallBack} />
      </Switch>
    );
  }
};

const mapStateToProps = (reduxState) => ({
  auth: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, null)(Nav));
