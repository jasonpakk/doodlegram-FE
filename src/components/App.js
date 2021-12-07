import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './nav/navbar';
import { loginFromStorage } from '../actions';
import Switch from './nav/switch';

const App = (props) => {
  useEffect(() => {
    props.loginFromStorage();
  });

  return (
    <Router>
      <Navbar />
      <Switch />
    </Router>
  );
};

export default connect(null, { loginFromStorage })(App);
