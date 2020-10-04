import React from 'react';
import EventsContainer from '../containers/events';
import { EventCard } from '../atoms/cards';
import EVENT_PNG from '../../assets/event.png';

const Events = () => {
  const buildTodaysEvent = () =>
    [
      { icon: EVENT_PNG, time: '10:30AM', title: 'Webinar: the basics of how to make something' },
      { icon: EVENT_PNG, time: '10:30AM', title: 'Team Building Activity🔥' },
    ].map((event, key) => (
      <EventCard key={key} icon={event.icon} time={event.time} title={event.title} />
    ));

  return <EventsContainer buildTodaysEvent={buildTodaysEvent} />;
};

export default Events;
