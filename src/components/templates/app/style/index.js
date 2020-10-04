import styled from 'styled-components';

const headerHeight = '80px';
const aviableHeight = `calc(100% - ${headerHeight})`
const navbarWidth = '55px';
const aviableWidth = `calc(100% - ${navbarWidth})`

const AppTemplateMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const AppTemplateHeaderContainer = styled.div`
  width: 100%;
  height: ${headerHeight};
`;
const AppTemplateContentContainer = styled.div`
  width: 100%;
  height: ${aviableHeight};
  display: flex;
`;
const AppTemplateNavbarContainer = styled.div`
  width: ${navbarWidth};
  height: 100%;
  background-color: #3d83fe;
`;
const AppTemplateChildrenContainer = styled.div`
  width: ${aviableWidth};
  height: 100%;
  background-color: #f5f5fb;
  padding: 5% 10%;
  box-sizing: border-box;
`;

export {
  AppTemplateMainContainer,
  AppTemplateHeaderContainer,
  AppTemplateContentContainer,
  AppTemplateNavbarContainer,
  AppTemplateChildrenContainer,
};
