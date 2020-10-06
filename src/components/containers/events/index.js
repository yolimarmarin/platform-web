import React, { useState, useEffect } from 'react';
import {
  EventsMainContainer,
  EventsSliderContainer,
  EventsTodayContainer,
  EventsTodayCardsContainer,
} from './style';
import SectionTitle from '../section-title';
import Slider from '../../slider';

const EventsContainer = ({ buildTodaysEvent, buildSlides }) => {
  const hasWindow = typeof window !== 'undefined';

  const getWidth = () => `${window.innerWidth}px`;

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);

  return (
    <EventsMainContainer>
      <SectionTitle title="Events" width="100%" dash={width > '768px' ? false : true} />
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
