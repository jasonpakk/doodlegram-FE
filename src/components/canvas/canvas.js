import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CanvasDraw from 'react-canvas-draw';

const Canvas = (props) => {
  return (
    <section>
      <p>Draw Here</p>
      <CanvasDraw />
    </section>
  );
};

const mapStateToProps = (reduxState) => ({

});

export default withRouter(connect(mapStateToProps, null)(Canvas));
