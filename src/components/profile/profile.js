import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../../actions';
import CreateButton from '../canvas/createDoodleBtn';

const Profile = (props) => {
  return (
    <section id="profile">
      {props.user ? (
        <div>

          <div id="userInfo">
            <img className="profilePic" src={props.user.picture} alt="profile" />

            <div id="userText">
              <div id="titleRow">
                <h2>{props.user.username}</h2>
                <button type="button" onClick={() => console.log('hi')}>Edit Profile</button>
                <button type="button" onClick={() => props.signoutUser(props.history)}>Log Out</button>
              </div>

              <div id="doodleRow">
                <h3>{props.user.name}</h3>
                <p>🖼️ <b>100</b> Doodles 🖼️</p>
              </div>

              <div className="textRow">
                <p style={{ backgroundColor: '#f8961e' }}>👤 {props.user.gender}</p>
                <p style={{ backgroundColor: '#43aa8b', color: 'white' }}>🎨 {props.user.favoriteColor}</p>
                <p style={{ backgroundColor: '#f9c74f' }}>📍 {props.user.home}</p>
              </div>

              <div className="textRow">
                <p style={{ backgroundColor: '#f94144', color: 'white' }}>🎂 {props.user.birthday}</p>
                <p style={{ backgroundColor: '#90be6d' }}>👟 {props.user.favoriteShoe}</p>
                <p style={{ backgroundColor: '#277da1', color: 'white' }}>🎧 {props.user.favoriteArtist}</p>
              </div>

              <div className="textRow">
                <p>{props.user.quote}</p>
              </div>
            </div>
          </div>

          <div id="userDoodles">
            <h2>Doodles</h2>
            <div className="doodleGallery">
              <div className="doodle" />
              <div className="doodle" />
              <div className="doodle" />
              <div className="doodle" />
              <div className="doodle" />
              <div className="doodle" />
              <div className="doodle" />
            </div>
          </div>
        </div>
      ) : null }
      <CreateButton />
    </section>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject.user,
});

export default withRouter(connect(mapStateToProps, { signoutUser })(Profile));
