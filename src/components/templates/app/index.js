import React from 'react';
import {
  AppTemplateMainContainer,
  AppTemplateHeaderContainer,
  AppTemplateContentContainer,
  AppTemplateNavbarContainer,
  AppTemplateChildrenContainer,
} from './style';
import NavBar from '../../wrappers/NavBar';
import Header from '../../wrappers/Header';

const AppTemplate = ({ children }) => {
  return (
    <AppTemplateMainContainer>
      <AppTemplateHeaderContainer>
        <Header />
      </AppTemplateHeaderContainer>
      <AppTemplateContentContainer>
        <AppTemplateNavbarContainer>
          <NavBar />
        </AppTemplateNavbarContainer>
        <AppTemplateChildrenContainer>{children}</AppTemplateChildrenContainer>
      </AppTemplateContentContainer>
    </AppTemplateMainContainer>
  );
};

export default AppTemplate;
