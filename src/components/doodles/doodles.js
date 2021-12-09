import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import CreateButton from '../canvas/createDoodleBtn';
import { fetchDoodles } from '../../actions/doodle';

const Doodles = (props) => {
  useEffect(() => {
    props.fetchDoodles();
  }, []);

  return (
    <section id="doodleHome">
      <h2>Doodle Gallery</h2>
      <div id="doodleGallery">
        {props.allDoodles ? props.allDoodles.map((doodle) => {
          return (
            <div className="doodleSquare">
              <img key={doodle._id}
                className="doodleImg"
                src={doodle.doodle}
                alt="doodle_picture"
              />
              <div className="doodleInfo">
                <img className="profilePic" src={doodle.author.picture} alt="profile" />
                <p>{doodle.author.username}</p>
              </div>
              <p className="doodleDate">{moment(doodle.createdAt).calendar()}</p>
            </div>
          );
        }) : <p>No Doodles Have Been Created Yet!</p>}
      </div>
      <CreateButton />
    </section>
  );
};

const mapStateToProps = (reduxState) => ({
  allDoodles: reduxState.doodle.allDoodles,
});

export default withRouter(connect(mapStateToProps, { fetchDoodles })(Doodles));
