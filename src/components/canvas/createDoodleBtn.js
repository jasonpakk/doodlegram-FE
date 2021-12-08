import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateButton = (props) => {
  return (
    <div className="createDoodleBtn">
      <NavLink to="/canvas">🖌️</NavLink>
    </div>
  );
};

export default CreateButton;
