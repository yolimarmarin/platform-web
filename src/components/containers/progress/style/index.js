import styled from 'styled-components';

const ProgressMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content:space-between;
`;

const ProgressOverviewContainer = styled.div`
  width: 40%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width:  100%
  }
`;
const ProgressContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-self: flex-end;

  @media (max-width: 768px) {
    width:  100%
  }
`;

const ProgressCardsContainer = styled.div`
  margin: 40px 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;

export {
  ProgressMainContainer,
  ProgressOverviewContainer,
  ProgressContainer,
  ProgressCardsContainer,
};
