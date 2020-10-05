import React from 'react';
import {
  EventsMainContainer,
  EventsSliderContainer,
  EventsTodayContainer,
  EventsTodayCardsContainer,
} from './style';
import SectionTitle from '../section-title';
import Slider from '../../slider';

const EventsContainer = ({ buildTodaysEvent, buildSlides }) => {
  return (
    <EventsMainContainer>
      <SectionTitle title="Events" width="100%" />
      <EventsSliderContainer>
        <Slider>{buildSlides()}</Slider>
      </EventsSliderContainer>
      <EventsTodayContainer>
        <SectionTitle title="EVENTS TODAY" dash={true} fontSize="15px" color="#2f4d75" />
        <EventsTodayCardsContainer>{buildTodaysEvent()}</EventsTodayCardsContainer>
      </EventsTodayContainer>
    </EventsMainContainer>
  );
};

export default EventsContainer;
