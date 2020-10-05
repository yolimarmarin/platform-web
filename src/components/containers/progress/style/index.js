import styled from 'styled-components';

const ProgressMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ProgressOverviewContainer = styled.div`
  width: 40%;
  margin-top: 20px;
`;
const ProgressContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ProgressCardsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 15px;
`;

export {
  ProgressMainContainer,
  ProgressOverviewContainer,
  ProgressContainer,
  ProgressCardsContainer,
};
