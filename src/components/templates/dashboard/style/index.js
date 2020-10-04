import styled from 'styled-components';

const DashboardTemplateMainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y:scroll;
  display:flex;
  flex-wrap:wrap;
  ::-webkit-scrollbar {
  display: none;
}
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export {
    DashboardTemplateMainContainer,
};
