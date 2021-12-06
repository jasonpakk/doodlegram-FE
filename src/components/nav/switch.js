import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../home/welcome';
import Profile from '../profile/profile';
import SignIn from '../home/signin';
import SignUp from '../home/signup';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route component={FallBack} />
    </Switch>
  );
};

export default Nav;
