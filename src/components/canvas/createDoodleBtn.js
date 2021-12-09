import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateButton = (props) => {
  return (
    <NavLink to="/canvas">
      <div className="createDoodleBtn">
        <b>🖌️</b>
        <p>Doodle!</p>
      </div>
    </NavLink>
  );
};

export default CreateButton;
