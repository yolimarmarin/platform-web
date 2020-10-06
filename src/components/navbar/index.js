import React from 'react';
import { NavBarMainContainer } from './style';

const NavBar = ({ children }) => {
  return (
    <NavBarMainContainer>
      {children}
    </NavBarMainContainer>
  );
};

export default NavBar;
