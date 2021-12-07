import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { helloWorld } from '../../actions';
import ParticleBG from './particleBG';

const Welcome = (props) => {
  return (
    <div className="welcomeScreen">
      <ParticleBG />
      <div className="welcomeText">
        <h1>Doodlegram</h1>
        <div className="buttonsRow">
          <NavLink to="/signin"><button className="loginBtn" type="button">Sign In</button></NavLink>
          <NavLink to="/signup"><button id="signinBtn" type="button">Sign Up</button></NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  welcome: reduxState.home.message,
});

export default withRouter(connect(mapStateToProps, { helloWorld })(Welcome));
