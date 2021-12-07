import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from '../home/welcome';
import Profile from '../profile/profile';
import SignIn from '../home/signin';
import SignUp from '../home/signup';
import Posts from '../posts/posts';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}>
        {props.auth ? <Redirect to="/posts" /> : null}
      </Route>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/posts" component={Posts} />
      <Route component={FallBack} />
    </Switch>
  );
};

const mapStateToProps = (reduxState) => ({
  auth: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, null)(Nav));
