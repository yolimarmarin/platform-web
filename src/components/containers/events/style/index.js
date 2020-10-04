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
`;
const EventsTodayContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-top:20px;
`;

export { EventsMainContainer, EventsSliderContainer, EventsTodayContainer };
