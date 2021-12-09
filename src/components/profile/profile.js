import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { signoutUser } from '../../actions';
import { fetchUserDoodles } from '../../actions/user';
import { deleteDoodle } from '../../actions/doodle';
import CreateButton from '../canvas/createDoodleBtn';

import nopfp from '../../assets/nopfp.png';

const Profile = (props) => {
  useEffect(() => {
    if (props.user) props.fetchUserDoodles(props.user._id);
  }, [props.user]);

  const [editing, setEdit] = useState(false);

  return (
    <section id="profile">
      {props.user ? (
        <div>
          <div id="userInfo">
            <img className="profilePic" src={props.user.picture ? props.user.picture : nopfp} alt="profile" />

            <div id="userText">
              <div id="titleRow">
                <h2>{props.user.username}</h2>
                <button type="button" onClick={() => props.history.push('/profile/edit')}>Edit Profile</button>
                <button type="button" onClick={() => props.signoutUser(props.history)}>Log Out</button>
              </div>

              <div id="doodleRow">
                <h3>{props.user.name ? props.user.name : props.user.username}</h3>
                <p>🖼️ <b>{props.doodles.length}</b> Doodles 🖼️</p>
              </div>

              <div className="textRow">
                {props.user.gender ? (<p style={{ backgroundColor: '#f8961e' }}>👤 {props.user.gender}</p>) : null}
                {props.user.favoriteColor ? (<p style={{ backgroundColor: '#43aa8b', color: 'white' }}>🎨 {props.user.favoriteColor}</p>) : null}
                {props.user.home ? (<p style={{ backgroundColor: '#f9c74f' }}>📍 {props.user.home}</p>) : null}
              </div>

              <div className="textRow">
                {props.user.birthday ? (<p style={{ backgroundColor: '#f94144', color: 'white' }}>🎂 {props.user.birthday}</p>) : null}
                {props.user.favoriteShoe ? (<p style={{ backgroundColor: '#90be6d' }}>👟 {props.user.favoriteShoe}</p>) : null}
                {props.user.favoriteArtist ? (<p style={{ backgroundColor: '#277da1', color: 'white' }}>🎧 {props.user.favoriteArtist}</p>) : null}
              </div>

              <div className="textRow">
                <p className="textQuote">{props.user.quote}</p>
              </div>

            </div>
          </div>

          <div id="userDoodles">
            <h2>Doodles</h2>
            {props.doodles.length > 0 ? (
              <button id="editDoodlesBtn"
                type="button"
                onClick={() => setEdit(!editing)}
              >
                {editing ? 'Save' : 'Edit Doodles'}
              </button>
            ) : null}

            <div id="profileDoodles">
              {props.doodles.length > 0 ? props.doodles.map((doodle) => {
                return (
                  <div key={doodle._id} className="doodleSquare">
                    <img
                      className="doodle"
                      src={doodle.doodle}
                      alt="doodle_picture"
                    />
                    <div className="dateRow">
                      <p className="doodleDate">{moment(doodle.createdAt).calendar()}</p>
                      {editing
                        ? (
                          <i role="button"
                            tabIndex={0}
                            aria-label="delete"
                            className="far fa-trash-alt"
                            onClick={() => {
                              props.deleteDoodle(doodle._id);
                              props.fetchUserDoodles(props.user._id);
                            }}
                          />
                        ) : null}
                    </div>
                  </div>
                );
              }) : <p>No Doodles Yet. Create One Now!</p>}
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
  doodles: reduxState.user.userDoodles,
});

export default withRouter(connect(mapStateToProps, { deleteDoodle, signoutUser, fetchUserDoodles })(Profile));
