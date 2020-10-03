import React from 'react';
import {
  AppTemplateMainContainer,
  AppTemplateHeaderContainer,
  AppTemplateContentContainer,
  AppTemplateNavbarContainer,
  AppTemplateChildrenContainer,
} from './style';
import NavBar from '../../wrappers/NavBar';

const AppTemplate = ({ children }) => {
  return (
    <AppTemplateMainContainer>
      <AppTemplateHeaderContainer>header</AppTemplateHeaderContainer>
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
