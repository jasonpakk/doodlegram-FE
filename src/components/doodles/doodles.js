import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
            <img key={doodle._id}
              className="doodleSquare"
              src={doodle.doodle}
              alt="doodle_picture"
            />
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
