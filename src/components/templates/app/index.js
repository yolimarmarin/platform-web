import React from 'react';
import {
    AppTemplateMainContainer,
    AppTemplateHeaderContainer,
    AppTemplateContentContainer,
    AppTemplateNavbarContainer,
    AppTemplateChildrenContainer
} from './style'

const AppTemplate = ({ children }) => {
  return (
    <AppTemplateMainContainer>
      <AppTemplateHeaderContainer>header</AppTemplateHeaderContainer>
      <AppTemplateContentContainer>
        <AppTemplateNavbarContainer>navbar</AppTemplateNavbarContainer>
        <AppTemplateChildrenContainer>{children}</AppTemplateChildrenContainer>
      </AppTemplateContentContainer>
    </AppTemplateMainContainer>
  );
};

export default AppTemplate
