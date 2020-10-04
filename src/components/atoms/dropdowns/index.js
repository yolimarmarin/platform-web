import React, { useState } from 'react';
import { PrimaryDropdownMainContainer } from './style';
import ARROW_UP_PNG from '../../../assets/arrow-up.png';
import ARROW_DOWN_PNG from '../../../assets/arrow-down.png';

const PrimaryDropdown = ({ icon, title, content }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <PrimaryDropdownMainContainer onClick={handleClick}>
      <div className="dropdown-header-container">
        <img src={icon} alt={icon} className="dropdown-header-icon" />
        <div className="dropdown-header-title">{title}</div>
        <img
          src={show ? ARROW_UP_PNG : ARROW_DOWN_PNG}
          alt="display-icon"
          className="dropdown-header-display-icon"
        />
      </div>
      {show ? <div className="dropdown-content">{content}</div> : null}
    </PrimaryDropdownMainContainer>
  );
};

export { PrimaryDropdown };
