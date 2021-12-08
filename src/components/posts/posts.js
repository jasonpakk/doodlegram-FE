import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

const Posts = (props) => {
  return (
    <section>
      <p>All posts</p>
      <div id="createDoodleBtn"><NavLink to="/canvas">🖌️</NavLink></div>
    </section>
  );
};

const mapStateToProps = (reduxState) => ({

});

export default withRouter(connect(mapStateToProps, null)(Posts));
