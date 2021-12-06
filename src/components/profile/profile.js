import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject.user,
});

export default withRouter(connect(mapStateToProps, null)(Profile));
