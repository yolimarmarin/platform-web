import styled from 'styled-components';

const EventsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom:30px;
`;

const EventsSliderContainer = styled.div`
  width: 70%;
  margin-top:20px;
  height: 245px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
const EventsTodayContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-top:20px;

  @media (max-width: 768px) {
    width:  100%
  }
`;

const EventsTodayCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x:scroll;
    margin-top:15px;
  }
`;

export { EventsMainContainer, EventsSliderContainer, EventsTodayContainer, EventsTodayCardsContainer };
