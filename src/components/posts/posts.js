import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Posts = (props) => {
  return (
    <div>
      <p>All posts</p>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({

});

export default withRouter(connect(mapStateToProps, null)(Posts));
