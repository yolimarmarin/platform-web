import React from 'react';
import EventsContainer from '../containers/events';
import { EventCard } from '../atoms/cards';
import EVENT_PNG from '../../assets/event.png';
import SLIDER_BG_PNG from '../../assets/slider-bg.png';
import { SliderItem } from '../slider';

const Events = () => {
  const buildTodaysEvent = () =>
    [
      { icon: EVENT_PNG, time: '10:30AM', title: 'Webinar: the basics of how to make something' },
      { icon: EVENT_PNG, time: '10:30AM', title: 'Team Building Activity🔥' },
    ].map((event, key) => (
      <EventCard key={key} icon={event.icon} time={event.time} title={event.title} />
    ));

  const buildSlides = () =>
    [
      {
        background: SLIDER_BG_PNG,
        date: 'May, 20',
        title: 'Youth Talent & Education',
        label: 'SCIENCE',
      },
      {
        background: SLIDER_BG_PNG,
        date: 'May, 20',
        title: 'Youth Talent & Education',
        label: 'SCIENCE',
      },
      {
        background: SLIDER_BG_PNG,
        date: 'May, 20',
        title: 'Youth Talent & Education',
        label: 'SCIENCE',
      },
    ].map((slide, key) => (
      <SliderItem
        key={key}
        background={slide.background}
        title={slide.title}
        label={slide.label}
        date={slide.date}
      />
    ));

  return <EventsContainer buildTodaysEvent={buildTodaysEvent} buildSlides={buildSlides} />;
};

export default Events;
