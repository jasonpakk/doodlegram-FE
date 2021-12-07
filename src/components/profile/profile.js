import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../../actions';

const Profile = (props) => {
  return (
    <section id="profile">
      <button type="button" onClick={() => props.signoutUser(props.history)}>Sign Out</button>
      {props.user ? (
        <div>
          <img src={props.user.picture} alt="profile" />
          <p>{props.user.name}</p>
          <p>{props.user.gender}</p>
          <p>{props.user.birthday}</p>
          <p>{props.user.home}</p>
          <p>{props.user.quote}</p>
          <p>{props.user.favoriteShoe}</p>
          <p>{props.user.favoriteArtist}</p>
          <p>{props.user.favoriteColor}</p>
        </div>
      ) : <p>Hi</p> }
    </section>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject.user,
});

export default withRouter(connect(mapStateToProps, { signoutUser })(Profile));
