import styled from 'styled-components';

const AppTemplateMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const AppTemplateHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
`;
const AppTemplateContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
`;
const AppTemplateNavbarContainer = styled.div`
  width: 50px;
  height: 100%;
  background-color: #3d83fe;
`;
const AppTemplateChildrenContainer = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  background-color: grey;
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
