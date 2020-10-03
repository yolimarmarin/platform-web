import React from 'react';
import { PrimaryButtonMainContainer } from './style';

const NavBarButton = ({ onClick, active, icon }) => {
  return (
    <PrimaryButtonMainContainer
      onClick={onClick}
      padding="15px 5px"
      margin="5px 0"
      active={active}
      background={"#2a5dfe"}
    >
      <img className="navbar-icon" alt={icon} src={icon} />
    </PrimaryButtonMainContainer>
  );
};

export { NavBarButton };
