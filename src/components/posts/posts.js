import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateButton from '../canvas/createDoodleBtn';

const Posts = (props) => {
  return (
    <section>
      <p>All posts</p>
      <CreateButton />
    </section>
  );
};

const mapStateToProps = (reduxState) => ({

});

export default withRouter(connect(mapStateToProps, null)(Posts));
