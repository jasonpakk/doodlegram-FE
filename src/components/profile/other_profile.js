import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { fetchUser, fetchUserDoodles } from '../../actions/user';

const OtherProfile = (props) => {
  useEffect(() => {
    props.fetchUser(props.match.params.id);
    props.fetchUserDoodles(props.match.params.id);
  }, []);

  return (
    <section id="profile">
      {props.user ? (
        <div>

          <div id="userInfo">
            <img className="profilePic" src={props.user.picture} alt="profile" />

            <div id="userText">
              <div id="titleRow">
                <h2>{props.user.username}</h2>
              </div>

              <div id="doodleRow">
                <h3>{props.user.name ? props.user.name : props.user.username}</h3>
                <p>🖼️ <b>{props.doodles.length}</b> Doodle{props.doodles.length === 1 ? null : 's'} 🖼️</p>
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
                <p className="textQuote">{props.user.quote}</p>
              </div>
            </div>
          </div>

          <div id="userDoodles">
            <h2>Doodles</h2>
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
                    </div>
                  </div>
                );
              }) : <p>No Doodles Yet. Create One Now!</p>}
            </div>
          </div>
        </div>
      ) : null }
    </section>
  );
};

const mapStateToProps = (reduxState) => ({
  doodles: reduxState.user.userDoodles,
  user: reduxState.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchUser, fetchUserDoodles })(OtherProfile));
